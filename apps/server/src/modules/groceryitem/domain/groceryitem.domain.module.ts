import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { GroceryitemDomainFacade } from './groceryitem.domain.facade'
import { Groceryitem } from './groceryitem.model'

@Module({
  imports: [TypeOrmModule.forFeature([Groceryitem]), DatabaseHelperModule],
  providers: [GroceryitemDomainFacade, GroceryitemDomainFacade],
  exports: [GroceryitemDomainFacade],
})
export class GroceryitemDomainModule {}
