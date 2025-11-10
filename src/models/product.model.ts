export class Product {
  constructor(public name: string, public price: number) {}
}

export class ProductWithTaxes extends Product {
  constructor(
    name: string,
    price: number,
    public category: RateKey,
    public imported: boolean
  ) {
    super(name, price);
  }
}

export type RateKey = "food" | "medicine" | "luxury" | "general";