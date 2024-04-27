import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ItemimageDomainFacade } from './itemimage.domain.facade'
import { Itemimage } from './itemimage.model'

@Module({
  imports: [TypeOrmModule.forFeature([Itemimage]), DatabaseHelperModule],
  providers: [ItemimageDomainFacade, ItemimageDomainFacade],
  exports: [ItemimageDomainFacade],
})
export class ItemimageDomainModule {}
