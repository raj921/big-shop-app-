import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Groceryitem as GroceryitemModel } from './groceryitem/groceryitem.model'

import { Itemimage as ItemimageModel } from './itemimage/itemimage.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Groceryitem extends GroceryitemModel {}

  export class Itemimage extends ItemimageModel {}
}
