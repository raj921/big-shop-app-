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
  Itemimage,
  ItemimageDomainFacade,
} from '@server/modules/itemimage/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ItemimageApplicationEvent } from './itemimage.application.event'
import { ItemimageCreateDto, ItemimageUpdateDto } from './itemimage.dto'

@Controller('/v1/itemimages')
export class ItemimageController {
  constructor(
    private eventService: EventService,
    private itemimageDomainFacade: ItemimageDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.itemimageDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ItemimageCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.itemimageDomainFacade.create(body)

    await this.eventService.emit<ItemimageApplicationEvent.ItemimageCreated.Payload>(
      ItemimageApplicationEvent.ItemimageCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:itemimageId')
  async findOne(
    @Param('itemimageId') itemimageId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.itemimageDomainFacade.findOneByIdOrFail(
      itemimageId,
      queryOptions,
    )

    return item
  }

  @Patch('/:itemimageId')
  async update(
    @Param('itemimageId') itemimageId: string,
    @Body() body: ItemimageUpdateDto,
  ) {
    const item = await this.itemimageDomainFacade.findOneByIdOrFail(itemimageId)

    const itemUpdated = await this.itemimageDomainFacade.update(
      item,
      body as Partial<Itemimage>,
    )
    return itemUpdated
  }

  @Delete('/:itemimageId')
  async delete(@Param('itemimageId') itemimageId: string) {
    const item = await this.itemimageDomainFacade.findOneByIdOrFail(itemimageId)

    await this.itemimageDomainFacade.delete(item)

    return item
  }
}
