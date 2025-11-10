import { BrazilTaxService } from '../../services/tax.service';
import { Product } from '../../models/product.model';

describe('BrazilTaxService.calculate', () => {
    let service: BrazilTaxService;

    beforeEach(() => {
        service = new BrazilTaxService();
    });

    // Helper to build product objects
    const makeProduct = (product: {name: string, price: number, category: string, imported: boolean}): ProductWithTaxes => ({
        name: product.name || 'Sample',
        price: product.price ?? 100,
        category: product.category || 'general',
        imported: product.imported ?? false,
    });

    /**
     * Assumed tax rules (hypothetical):
     * - Base tax: 10%
     * - category 'food' or 'medicine': 5%
     * - category 'luxury': 25%
     * - imported: +15% (added after category/base rate)
     * - Result rounded to 2 decimals
     */

    test('applies 5% for essential (food) non-imported', () => {
        const product = makeProduct({ name: 'frutas', price: 200, category: 'food', imported: false });
        const tax = service.calculate(product);
        expect(tax).toBeCloseTo(200 * 0.05, 2);
    });

    test('applies 25% for luxury non-imported', () => {
        const product = makeProduct({ name: 'relogio', price: 400, category: 'luxury', imported: false });
        const tax = service.calculate(product);
        expect(tax).toBeCloseTo(400 * 0.25, 2);
    });

    test('applies 10% + 15% for imported non-essential', () => {
        const product = makeProduct({ name: 'telefone', price: 1000, category: 'general', imported: true });
        const tax = service.calculate(product);
        expect(tax).toBeCloseTo((1000 * 1.10) * 1.15, 2);
    });

});