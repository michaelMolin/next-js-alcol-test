export interface BeverageCategoryInterface {
    id: string
    name: string;
    image: string;
    alcoholPercentageText: string,
    alcoholPercentageNumber: number,
}

export interface BeverageSelectionInterface {
    totalBeverages: number
    beverageData: QuantityStateInterface[];
    onQuantityChange: (productId: number, quantity: number) => void;
    prevStep: () => void
    nextStep: () => void
}
export interface BeverageInterface {
    id: number
    name: string;
    image: string;
    category_id: string;
    format: number;
    formatText: string;
    alcoholPercentage: number;
}
export interface BeveragePropsInterface extends BeverageInterface {
    beverageData: QuantityStateInterface[];
    onQuantityChange: (productId: number, quantity: number) => void;
}
export interface QuantityPropsInterface {
    productId: number
    beverageData: QuantityStateInterface[];
    onQuantityChange: (productId: number, quantity: number) => void;
}
export interface QuantityStateInterface {
    id: number
    quantity: number;
}