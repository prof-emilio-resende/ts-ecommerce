import { Product } from "../../models/product.model";

describe("Product model operations", () => {
  it("must be built with name and price", () => {
    // arrange
    const name = "Product One";
    const price = 10.00;
    const p1 = new Product(name, price);
    // act
    
    // assert
    expect(p1.name).toBe(name);
    expect(p1.price).toBe(price);
  });
});
