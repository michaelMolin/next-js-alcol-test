import Quantity from './Quantity';
import type {BeveragePropsInterface} from "../../interfaces/BeverageInterface";

export default function BeverageSelection(props: BeveragePropsInterface) {
    return(
         <div className="w-full flex justify-between items-center my-2 py-4 pl-4 h-25 bg-white">
            <div className="w-1/2">
                <div>
                    <h4 className="text-title text-display-3 font-bold">{props.name}</h4>
                    <p className="mt-2">{props.formatText}</p>
                </div>
            </div>
            <Quantity productId={props.id} beverageData={props.beverageData} onQuantityChange={props.onQuantityChange} />
        </div>
    )
}