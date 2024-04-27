import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('e4ec6d86-f0df-444b-83df-8d5019acb4de', '7Simone.Heathcote@hotmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=9', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('fbfd043f-9aba-4899-8082-7de166973f83', '13Carolyn.Klocko@yahoo.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=15', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('d91061b8-2909-4914-97a3-6be794c0108e', '19Darwin96@hotmail.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('dd4b2d92-6df2-44f8-bce0-f8ae1ecb6d89', '25Alexa_Jenkins35@gmail.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a2ff0ec1-1e46-40bf-9b02-a20a534409cf', '31Odell10@yahoo.com', 'Bob Smith', 'https://i.imgur.com/YfJQV5z.png?id=33', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('87f9da58-9f1a-45c1-a8c0-80141d32f405', '37Jaden_Dach@gmail.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('35dbfda8-ea40-4217-b3bd-2a8b1fe33dbe', '43Nat20@hotmail.com', 'Dave Brown', 'https://i.imgur.com/YfJQV5z.png?id=45', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('bded879c-d882-4074-839b-9f8c1ed077f3', '49Electa62@gmail.com', 'Alice Johnson', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('b8a75b3c-b78b-484d-a260-82520c8b0b44', '55Josephine91@gmail.com', 'Eve Davis', 'https://i.imgur.com/YfJQV5z.png?id=57', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6cafcfdb-edf8-421b-8a4f-4e8ad36d6f07', 'Price Drop Alert', 'Discover new recipes and the ingredients youll need', 'FreshMart Team', '64Effie.Parisian74@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', 'a2ff0ec1-1e46-40bf-9b02-a20a534409cf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('91fd1d77-539a-4bd3-9302-7ecc41ebc618', 'Holiday Discounts', 'Enjoy up to 50 off on holiday essentials.', 'MarketPlace Admin', '71Monique_Carter23@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6097abb4-c61d-4ffe-9f50-d00e443138fa', 'Recipe Ideas', 'Discover new recipes and the ingredients youll need', 'FreshMart Team', '78Kristian_Mraz@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'b8a75b3c-b78b-484d-a260-82520c8b0b44');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5e30a9d2-8704-4df2-b4de-ac8c90c6cfa9', 'Holiday Discounts', 'Enjoy up to 50 off on holiday essentials.', 'MarketPlace Admin', '85Jordane77@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('cda8285e-e373-46de-b6da-8b7f8ae9ca09', 'Recipe Ideas', 'Check out the new products available in our store.', 'FreshMart Team', '92Simeon.Flatley65@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', 'bded879c-d882-4074-839b-9f8c1ed077f3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('31a6bae5-6828-440e-99b7-e6736ae69d8e', 'Weekly Specials', 'Explore this weeks special discounts on fruits and vegetables.', '', '99Kody37@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', '35dbfda8-ea40-4217-b3bd-2a8b1fe33dbe');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f0f02e05-9a0c-4f43-a770-8ed4aec102c6', 'Holiday Discounts', 'Discover new recipes and the ingredients youll need', 'GroceryGuru', '106Yessenia_Jakubowski@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'b8a75b3c-b78b-484d-a260-82520c8b0b44');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d5c86a84-447f-4efb-a2f9-a66934a7b27d', 'Holiday Discounts', 'Check out the new products available in our store.', 'FreshMart Team', '113Krista.Deckow66@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'a2ff0ec1-1e46-40bf-9b02-a20a534409cf');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a84caecf-8c3c-4b1b-9f14-c51b6cd95ef4', 'New Item Added', 'Explore this weeks special discounts on fruits and vegetables.', 'MarketPlace Admin', '120Darby.Langosh13@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', 'dd4b2d92-6df2-44f8-bce0-f8ae1ecb6d89');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7e3527fe-dc63-4eef-ab12-be2dec29c981', 'Weekly Specials', 'Check out the new products available in our store.', 'MarketPlace Admin', '127Romaine73@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', 'a2ff0ec1-1e46-40bf-9b02-a20a534409cf');

INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('cac699c6-7cec-4897-9d6b-6250a30bfb41', 'Eggs', 'Fresh green apples', '35dbfda8-ea40-4217-b3bd-2a8b1fe33dbe');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('6f2f5a37-8e00-41fa-944a-e1d1b8c9db68', 'Apples', 'Fresh green apples', 'b8a75b3c-b78b-484d-a260-82520c8b0b44');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('2b02beee-8d69-4b84-8e1d-7fbc7c350fcb', 'Eggs', 'Organic carrots', 'e4ec6d86-f0df-444b-83df-8d5019acb4de');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('64f8c425-a3f8-458b-82a5-8e7cd9cc7a3c', 'Carrots', 'Organic carrots', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('8e78e23b-25fc-4a14-bd20-483d21bfd8fe', 'Carrots', 'Fresh green apples', 'e4ec6d86-f0df-444b-83df-8d5019acb4de');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('1b65eed9-b12b-460f-91fe-2c70195f6e77', 'Carrots', 'Ripe yellow bananas', '87f9da58-9f1a-45c1-a8c0-80141d32f405');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('09580f64-9781-461c-9c79-a307200f5b47', 'Dairy Milk', 'Freerange eggs', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('f7ed432c-1821-4314-a764-213661b9bd6e', 'Apples', 'Ripe yellow bananas', 'bded879c-d882-4074-839b-9f8c1ed077f3');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('01036ed1-5e8b-4253-9af3-2709de7e2838', 'Eggs', 'Freerange eggs', 'dd4b2d92-6df2-44f8-bce0-f8ae1ecb6d89');
INSERT INTO "groceryitem" ("id", "name", "description", "userId") VALUES ('522bc060-e11a-4abc-be38-6e09b4743e81', 'Bananas', 'Organic carrots', 'fbfd043f-9aba-4899-8082-7de166973f83');

INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('e0aee37e-5c1b-4630-a4af-957408020db3', 'https://i.imgur.com/YfJQV5z.png?id=161', '01036ed1-5e8b-4253-9af3-2709de7e2838');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('f17964b1-e26c-4b5a-a6ca-9346a79eb507', 'https://i.imgur.com/YfJQV5z.png?id=163', '8e78e23b-25fc-4a14-bd20-483d21bfd8fe');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('6d4bc069-b9b0-4fc4-8db5-09d4d48810f7', 'https://i.imgur.com/YfJQV5z.png?id=165', '6f2f5a37-8e00-41fa-944a-e1d1b8c9db68');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('8802339d-1c1e-4a2b-bd27-9d641b93908c', 'https://i.imgur.com/YfJQV5z.png?id=167', '09580f64-9781-461c-9c79-a307200f5b47');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('79da16fd-4f34-488c-bb17-c5a4d43e973a', 'https://i.imgur.com/YfJQV5z.png?id=169', '1b65eed9-b12b-460f-91fe-2c70195f6e77');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('b0d51ab9-8020-4807-972c-8bea96aae23b', 'https://i.imgur.com/YfJQV5z.png?id=171', '64f8c425-a3f8-458b-82a5-8e7cd9cc7a3c');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('24c2eb22-01de-4705-bac1-eb81d4ff1ab0', 'https://i.imgur.com/YfJQV5z.png?id=173', '01036ed1-5e8b-4253-9af3-2709de7e2838');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('9ba525a9-61dd-46a9-8ca6-1c4accc66d52', 'https://i.imgur.com/YfJQV5z.png?id=175', '6f2f5a37-8e00-41fa-944a-e1d1b8c9db68');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('0cec41ff-d83c-4375-9351-782e75a48ab8', 'https://i.imgur.com/YfJQV5z.png?id=177', '1b65eed9-b12b-460f-91fe-2c70195f6e77');
INSERT INTO "itemimage" ("id", "imageUrl", "itemId") VALUES ('bd5b99a5-3211-4288-a666-910eb8349788', 'https://i.imgur.com/YfJQV5z.png?id=179', '64f8c425-a3f8-458b-82a5-8e7cd9cc7a3c');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
