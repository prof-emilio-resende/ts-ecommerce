import { ProductWithTaxes, RateKey } from "../models/product.model";

export class BrazilTaxService {
    calculate(product: ProductWithTaxes): number {
        let tax = 0;

        // Base tax rates
        const baseRates: Record<RateKey, number> = {
            food: 0.05,
            medicine: 0.05,
            luxury: 0.25,
            general: 0.10
        };

        // Calculate base tax
        tax += product.price * (baseRates[product.category] || baseRates.general);

        // Apply import duty
        if (product.imported) {
            tax = (product.price + tax) * 0.15;
        }

        return parseFloat(tax.toFixed(2));
    }
}