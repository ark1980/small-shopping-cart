import { faker } from "@faker-js/faker";

export const data = [...Array(20)].map(() => {
  return {
    id: faker.datatype.uuid(),
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.business()
  };
});
