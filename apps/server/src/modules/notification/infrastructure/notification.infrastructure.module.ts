import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationGroceryitemSubscriber } from './subscribers/notification.groceryitem.subscriber'

import { NotificationItemimageSubscriber } from './subscribers/notification.itemimage.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationGroceryitemSubscriber,

    NotificationItemimageSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
