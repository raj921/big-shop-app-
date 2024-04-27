import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  Groceryitem,
  GroceryitemDomainFacade,
} from '@server/modules/groceryitem/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { GroceryitemApplicationEvent } from './groceryitem.application.event'
import { GroceryitemCreateDto, GroceryitemUpdateDto } from './groceryitem.dto'

@Controller('/v1/groceryitems')
export class GroceryitemController {
  constructor(
    private eventService: EventService,
    private groceryitemDomainFacade: GroceryitemDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.groceryitemDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: GroceryitemCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.groceryitemDomainFacade.create(body)

    await this.eventService.emit<GroceryitemApplicationEvent.GroceryitemCreated.Payload>(
      GroceryitemApplicationEvent.GroceryitemCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:groceryitemId')
  async findOne(
    @Param('groceryitemId') groceryitemId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.groceryitemDomainFacade.findOneByIdOrFail(
      groceryitemId,
      queryOptions,
    )

    return item
  }

  @Patch('/:groceryitemId')
  async update(
    @Param('groceryitemId') groceryitemId: string,
    @Body() body: GroceryitemUpdateDto,
  ) {
    const item =
      await this.groceryitemDomainFacade.findOneByIdOrFail(groceryitemId)

    const itemUpdated = await this.groceryitemDomainFacade.update(
      item,
      body as Partial<Groceryitem>,
    )
    return itemUpdated
  }

  @Delete('/:groceryitemId')
  async delete(@Param('groceryitemId') groceryitemId: string) {
    const item =
      await this.groceryitemDomainFacade.findOneByIdOrFail(groceryitemId)

    await this.groceryitemDomainFacade.delete(item)

    return item
  }
}
