import { CatalogRepository } from '../../persistence/catalog.repo';
import { Product } from '../../models/product.model';

describe('CatalogRepository', () => {
    describe('all', () => {
        it('should return all catalog items', async () => {
            // arrange
            const repo = CatalogRepository.getInstance();
            repo.populate(getCatalogFixture());
            // act
            const items = repo.all();
            // assert
            expect(items.length).toBe(3);
            expect(items).toEqual(getCatalogFixture());
        });
    });
});

function getCatalogFixture(): Array<Product> {
    return [
        { name: 'Item 1', price: 10.0 },
        { name: 'Item 2', price: 20.0 },
        { name: 'Item 3', price: 30.0 },
    ];
}