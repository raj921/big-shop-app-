import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { GroceryitemDomainFacade } from '@server/modules/groceryitem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { GroceryitemApplicationEvent } from './groceryitem.application.event'
import { GroceryitemCreateDto } from './groceryitem.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class GroceryitemByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private groceryitemDomainFacade: GroceryitemDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/groceryitems')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.groceryitemDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/groceryitems')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: GroceryitemCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.groceryitemDomainFacade.create(valuesUpdated)

    await this.eventService.emit<GroceryitemApplicationEvent.GroceryitemCreated.Payload>(
      GroceryitemApplicationEvent.GroceryitemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
