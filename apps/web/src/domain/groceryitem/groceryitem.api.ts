import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Groceryitem } from './groceryitem.model'

export class GroceryitemApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Groceryitem>,
  ): Promise<Groceryitem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/groceryitems${buildOptions}`)
  }

  static findOne(
    groceryitemId: string,
    queryOptions?: ApiHelper.QueryOptions<Groceryitem>,
  ): Promise<Groceryitem> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/groceryitems/${groceryitemId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Groceryitem>): Promise<Groceryitem> {
    return HttpService.api.post(`/v1/groceryitems`, values)
  }

  static updateOne(
    groceryitemId: string,
    values: Partial<Groceryitem>,
  ): Promise<Groceryitem> {
    return HttpService.api.patch(`/v1/groceryitems/${groceryitemId}`, values)
  }

  static deleteOne(groceryitemId: string): Promise<void> {
    return HttpService.api.delete(`/v1/groceryitems/${groceryitemId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Groceryitem>,
  ): Promise<Groceryitem[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/groceryitems${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Groceryitem>,
  ): Promise<Groceryitem> {
    return HttpService.api.post(`/v1/users/user/${userId}/groceryitems`, values)
  }
}
