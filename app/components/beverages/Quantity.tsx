import type {QuantityPropsInterface} from '../../interfaces/BeverageInterface'

export default function Quantity(props: QuantityPropsInterface) {
    const currentDataBeverage = props.beverageData.find((item : any) => item.id === props.productId );
    if (!currentDataBeverage) return null;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value) || 0;
        props.onQuantityChange(props.productId, newQuantity);
    }

    const beverageBoxClass = currentDataBeverage.quantity > 0 
        ? 'text-center bg-beverage-selected mr-1 text-display-1 font-bold w-15 text-title h-25' 
        : 'text-center bg-[#F7FAFF] mr-1 text-display-1 font-bold w-15 text-title h-25'

    return (
        <div className="w-1/2 flex justify-between items-center h-full gap-1">
                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                        className="bg-[#F7FAFF] mr-1 text-display-1 font-bold  w-15 text-title flex justify-center items-center h-25"
                    onClick={() => props.onQuantityChange(props.productId, currentDataBeverage.quantity - 1)}
                >
                    -
                </button>
                <input type="number" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation"
                       min="1"
                       max="99"
                       className={`base-class ${beverageBoxClass}`}
                       value={currentDataBeverage.quantity}
                       onChange={handleInputChange}
                   required/>
                <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                        className="bg-[#F7FAFF] mr-1 text-display-1 font-bold text-center text-title flex justify-center items-center h-25 w-15"
                    onClick={() => props.onQuantityChange(props.productId, currentDataBeverage.quantity + 1)}
                >
                    +
                </button>
            </div>
    )
}