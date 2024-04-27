import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ItemimageDomainModule } from '../domain'
import { ItemimageController } from './itemimage.controller'

import { GroceryitemDomainModule } from '../../../modules/groceryitem/domain'

import { ItemimageByGroceryitemController } from './itemimageByGroceryitem.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ItemimageDomainModule,

    GroceryitemDomainModule,
  ],
  controllers: [ItemimageController, ItemimageByGroceryitemController],
  providers: [],
})
export class ItemimageApplicationModule {}
