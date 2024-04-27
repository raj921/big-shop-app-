import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Itemimage } from './itemimage.model'

export class ItemimageApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Itemimage>,
  ): Promise<Itemimage[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/itemimages${buildOptions}`)
  }

  static findOne(
    itemimageId: string,
    queryOptions?: ApiHelper.QueryOptions<Itemimage>,
  ): Promise<Itemimage> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/itemimages/${itemimageId}${buildOptions}`)
  }

  static createOne(values: Partial<Itemimage>): Promise<Itemimage> {
    return HttpService.api.post(`/v1/itemimages`, values)
  }

  static updateOne(
    itemimageId: string,
    values: Partial<Itemimage>,
  ): Promise<Itemimage> {
    return HttpService.api.patch(`/v1/itemimages/${itemimageId}`, values)
  }

  static deleteOne(itemimageId: string): Promise<void> {
    return HttpService.api.delete(`/v1/itemimages/${itemimageId}`)
  }

  static findManyByItemId(
    itemId: string,
    queryOptions?: ApiHelper.QueryOptions<Itemimage>,
  ): Promise<Itemimage[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/groceryitems/item/${itemId}/itemimages${buildOptions}`,
    )
  }

  static createOneByItemId(
    itemId: string,
    values: Partial<Itemimage>,
  ): Promise<Itemimage> {
    return HttpService.api.post(
      `/v1/groceryitems/item/${itemId}/itemimages`,
      values,
    )
  }
}
