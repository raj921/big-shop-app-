import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { GroceryitemDomainModule } from './groceryitem/domain'

import { ItemimageDomainModule } from './itemimage/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    GroceryitemDomainModule,

    ItemimageDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
