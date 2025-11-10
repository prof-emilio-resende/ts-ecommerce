import { Product } from "../models/product.model";

export class CatalogRepository {
    private static instance: CatalogRepository;
    public static getInstance(): CatalogRepository {
        if (!CatalogRepository.instance) {
            CatalogRepository.instance = new CatalogRepository();
        }
        return CatalogRepository.instance;
    }

    private items: Array<Product> = [];

    populate(items: Array<Product>): void {
        this.items = items;
    }

    all(): Array<Product> {
        return this.items;
    }
}