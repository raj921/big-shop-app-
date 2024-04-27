import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ItemimageDomainFacade } from '@server/modules/itemimage/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ItemimageApplicationEvent } from './itemimage.application.event'
import { ItemimageCreateDto } from './itemimage.dto'

import { GroceryitemDomainFacade } from '../../groceryitem/domain'

@Controller('/v1/groceryitems')
export class ItemimageByGroceryitemController {
  constructor(
    private groceryitemDomainFacade: GroceryitemDomainFacade,

    private itemimageDomainFacade: ItemimageDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/item/:itemId/itemimages')
  async findManyItemId(
    @Param('itemId') itemId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.groceryitemDomainFacade.findOneByIdOrFail(itemId)

    const items = await this.itemimageDomainFacade.findManyByItem(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/item/:itemId/itemimages')
  async createByItemId(
    @Param('itemId') itemId: string,
    @Body() body: ItemimageCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, itemId }

    const item = await this.itemimageDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ItemimageApplicationEvent.ItemimageCreated.Payload>(
      ItemimageApplicationEvent.ItemimageCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
