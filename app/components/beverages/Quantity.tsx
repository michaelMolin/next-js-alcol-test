import type {QuantityPropsInterface} from '../../interfaces/BeverageInterface'

export default function Quantity(props: QuantityPropsInterface) {
    const currentDataBeverage = props.beverageData.find((item : any) => item.id === props.productId );
    if (!currentDataBeverage) return null;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value) || 0;
        props.onQuantityChange(props.productId, newQuantity);
    }

    return (
        <div className="w-1/2 flex justify-between items-center h-full">
                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                        className="bg-[#F7FAFF] mr-1 text-display-1 font-bold w-1/4 text-title flex justify-center items-center h-25"
                    onClick={() => props.onQuantityChange(props.productId, currentDataBeverage.quantity - 1)}
                >
                    <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 12h14"/>
                    </svg>
                </button>
                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation"
                       className="text-center bg-[#F7FAFF] mr-1 text-display-1 font-bold w-1/2 text-title h-25"
                       value={currentDataBeverage.quantity}
                       onChange={handleInputChange}
                   required/>
                <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                        className="bg-[#F7FAFF] mr-1 text-display-1 font-bold w-1/4 text-center text-title flex justify-center items-center h-25"
                    onClick={() => props.onQuantityChange(props.productId, currentDataBeverage.quantity + 1)}
                >
                    <svg className="w-8 h-8 text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M5 12h14m-7 7V5"/>
                    </svg>
                </button>
            </div>
    )
}