import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Itemimage } from './itemimage.model'

import { Groceryitem } from '../../groceryitem/domain'

@Injectable()
export class ItemimageDomainFacade {
  constructor(
    @InjectRepository(Itemimage)
    private repository: Repository<Itemimage>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Itemimage>): Promise<Itemimage> {
    return this.repository.save(values)
  }

  async update(
    item: Itemimage,
    values: Partial<Itemimage>,
  ): Promise<Itemimage> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Itemimage): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Itemimage> = {},
  ): Promise<Itemimage[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Itemimage> = {},
  ): Promise<Itemimage> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByItem(
    item: Groceryitem,
    queryOptions: RequestHelper.QueryOptions<Itemimage> = {},
  ): Promise<Itemimage[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('item')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        itemId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
