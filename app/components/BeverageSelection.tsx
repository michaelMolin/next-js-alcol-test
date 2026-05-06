import Quantity from './Quantity';
import type {BeveragePropsInterface} from "../interfaces/BeverageInterface";

export default function BeverageSelection(props: BeveragePropsInterface) {
    return(
         <div className="w-full flex justify-between items-center my-2 p-4">
            <div className="w-1/2">
                <div>
                    <h4 className="text-title text-display-3">{props.name}</h4>
                    <p>{props.format} ml</p>
                </div>
            </div>
            <Quantity productId={props.id} beverageData={props.beverageData} onQuantityChange={props.onQuantityChange} />
        </div>
    )
}