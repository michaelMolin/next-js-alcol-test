import { useState } from "react";
import type { QuantityStateInterface, BeverageSelectionInterface, BeverageInterface } from "../interfaces/BeverageInterface.ts";
import beverages from "../data/beverages.json";
import beverageList from "../data/beverages.json";

export const useBeverageData = () => {
    const [beverageData, setBeverageData] = useState<QuantityStateInterface[]>(() =>
        beverages.map(beverage => ({ id: beverage.id, quantity: 0 }))
    );

    const totalBeverages = beverageData.reduce((total, item) => total + item.quantity, 0)

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setBeverageData(prev =>
            prev.map(item =>
                item.id === productId ? ({ ...item, quantity: newQuantity }) : item)
        )
    }

    return { beverageData, handleQuantityChange, totalBeverages }
}

export const useBeverageTakenData = (props: BeverageSelectionInterface) => {
    const beverages: BeverageInterface[] = beverageList;
    const idsBeverageTaken = props.beverageData.filter(item => item.quantity > 0).map(item => item.id);
    return beverages.filter(beverage => idsBeverageTaken.includes(beverage.id))
}

export const getAlcoholicData =  (props: QuantityStateInterface[]) => {
    const beverages: BeverageInterface[] = beverageList;
    const idsBeverageTaken = props.filter(item => item.quantity > 0).map(item => item.id);
    const filterBeverages = beverages
    .filter(beverage => idsBeverageTaken.includes(beverage.id))
    .map(beverage => ({
        ...beverage,
        quantity: props.find(item => item.id === beverage.id)?.quantity || 0
    }));
    let alcoholicGramsTotal = 0;

    filterBeverages.forEach(beverage => {
        const liquids = ( beverage.format * beverage.quantity) /100;
        const alcoholicGrams = (liquids * 0.8) * (beverage.alcoholPercentage);
        alcoholicGramsTotal += alcoholicGrams;
    })

    return alcoholicGramsTotal;
   }
