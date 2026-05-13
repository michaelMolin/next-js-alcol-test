import type {UserInterface} from "../interfaces/UserInterface.ts";
import type {QuantityStateInterface} from "../interfaces/BeverageInterface.js";
import {getAlcoholicData} from "../hooks/BeverageHook";
import {genderFactor} from "../hooks/UserHook";


export default function Result(props: {beverageData : QuantityStateInterface[], userData: UserInterface, step: number, prevStep: () => void}) {
        const result: number = getAlcoholicData(props.beverageData) / ( parseInt(props.userData.weight) * genderFactor(props.userData.gender, props.userData.hasEaten));
        let bgClass = "flex flex-col justify-center items-center bg-result-ok h-dvh pt-2"
        let text = "Nessuna traccia di alcol. Sei a posto per metterti alla guida in tranquillità. Ricorda comunque di tenere sotto controllo stanchezza e condizioni generali prima di partire."
        
        if(result > 0 && result < 0.49) {
            bgClass = "flex flex-col bg-result-warning h-dvh pt-2"
            text = "Sei sotto il limite di legge per i conducenti ordinari, quindi formalmente puoi guidare. Tieni però presente che anche piccole quantità di alcol possono ridurre attenzione e tempi di reazione. Se hai dubbi, meglio aspettare un po' prima di rimetterti alla guida."
        }
        if(result > 0.5 && result < 0.8) {
            bgClass = "flex flex-col bg-result-danger h-dvh pt-2"
            text = "Hai superato il limite consentito. È prevista una sanzione amministrativa e la sospensione temporanea della patente, ma senza conseguenze penali. Per stasera meglio lasciare l'auto dov'è."
        }
        if(result > 0.8) {
            bgClass = "flex flex-col bg-result-danger h-dvh pt-2"
            text = "Il valore rilevato è sopra la soglia penale: scattano sanzioni più severe e la sospensione della patente. Non metterti assolutamente alla guida e fatti riportare a casa."

        }
        if(result > 0 && props.userData.hasDrivenLicense) {
            bgClass = "flex flex-col bg-result-danger h-dvh pt-2"
            text = "Per i neopatentati vale la regola della tolleranza zero: anche una piccola quantità di alcol comporta una sanzione. Meglio rimandare la guida e farsi accompagnare o chiamare un taxi."
        }
    return (
        <div>
            <main className={`base-class ${bgClass}`}>
                <div className="relative w-full">
                    <div className="absolute left-5 top-4" onClick={props.prevStep}>
                        <img src="assets/back.svg" alt="back img" />
                    </div>
                </div>
                <div className="px-5 w-full flex justify-start items-center py-4">
                    
                </div>
                <div className="px-5 flex flex-col h-full justify-center">
                    <h1 className="text-display-0 font-bold text-title my-6">{result.toFixed(2)} g/L</h1>
                    <h2 className="text-paragraph text-left text-title">{text}</h2>
                    <div className="w-full flex justify-end items-center mt-8">
                        <img src="assets/info.svg" />
                    </div>
                </div>
            </main>
        </div>
    )
}