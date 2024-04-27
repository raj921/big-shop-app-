import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { GroceryitemDomainModule } from '../domain'
import { GroceryitemController } from './groceryitem.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { GroceryitemByUserController } from './groceryitemByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    GroceryitemDomainModule,

    UserDomainModule,
  ],
  controllers: [GroceryitemController, GroceryitemByUserController],
  providers: [],
})
export class GroceryitemApplicationModule {}
