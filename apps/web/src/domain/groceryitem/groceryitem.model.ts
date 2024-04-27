import { User } from '../user'

import { Itemimage } from '../itemimage'

export class Groceryitem {
  id: string

  name: string

  description?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  itemimagesAsItem?: Itemimage[]
}
