export namespace GroceryitemApplicationEvent {
  export namespace GroceryitemCreated {
    export const key = 'groceryitem.application.groceryitem.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
