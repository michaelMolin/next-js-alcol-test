import type {UserInterface} from "../interfaces/UserInterface.ts";
import type {QuantityStateInterface} from "../interfaces/BeverageInterface.js";
import {getAlcoholicData} from "../hooks/BeverageHook";
import {genderFactor} from "../hooks/UserHook";


export default function Result(props: {beverageData : QuantityStateInterface[], userData: UserInterface}) {
        const result: number = getAlcoholicData(props.beverageData) / ( parseInt(props.userData.weight) * genderFactor(props.userData.gender, props.userData.hasEaten));
        console.log(result);
        let bgClass = "text-center px-4 bg-result-ok flex flex-col justify-center items-center h-screen"
        let title = "Puoi Guidare!"
        let text = "Sei sotto al limite legale"
        
        if(result > 0.5 && result < 1) {
            bgClass = "text-center px-4 bg-result-warning flex flex-col justify-center items-center h-screen"
            title = "NON Puoi Guidare!"
            text = "Tasso alcolico oltre il limite"
        }
        if(result > 1) {
            bgClass = "text-center px-4 bg-result-danger flex flex-col justify-center items-center h-screen"
            title = "PERICOLO"
            text = "Tasso alcolico molto elevato"
        }
        if(result > 0 && props.userData.hasDrivenLicense) {
            bgClass = "text-center px-4 bg-result-danger flex flex-col justify-center items-center h-screen"
            title = "NON Puoi Guidare!"
            text = "SEI UN NEOPATENTATO CRETINO"
        }
    return (
        <div>
            <main className={`base-class ${bgClass}`}>
                <h1 className="text-display-0 font-bold text-title mb-4">{title}!</h1>
                <h2 className="text-display-1 font-bold text-title">{text}</h2>
            </main>
            
        </div>
    )
}