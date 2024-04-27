export namespace ItemimageApplicationEvent {
  export namespace ItemimageCreated {
    export const key = 'itemimage.application.itemimage.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
