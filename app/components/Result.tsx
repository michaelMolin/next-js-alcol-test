import type {UserInterface} from "../interfaces/UserInterface.ts";
import type {QuantityStateInterface} from "../interfaces/BeverageInterface.js";
import {getAlcoholicData} from "../hooks/BeverageHook";
import {genderFactor} from "../hooks/UserHook";


export default function Result(props: {beverageData : QuantityStateInterface[], userData: UserInterface, step: number, prevStep: () => void}) {
        const result: number = getAlcoholicData(props.beverageData) / ( parseInt(props.userData.weight) * genderFactor(props.userData.gender, props.userData.hasEaten));
        let bgClass = "text-center bg-result-ok flex flex-col justify-between h-screen"
        let text = "Ti sei dimenticato di bere oggi?"
        let imgMeme="assets/salvini-meme-1.webp"
        
        if(result > 0 && result < 0.49) {
            bgClass = "text-center px-4 bg-result-warning flex flex-col justify-center items-center h-screen"
            text = "Nessuna sanzione amministrativa ma sta attento che se ti pigli un altro bicchiere so cazzi."
            imgMeme="assets/salvini-2.png"
        }
        if(result > 0.5 && result < 0.8) {
            bgClass = "text-center px-4 bg-result-danger flex flex-col justify-center items-center h-screen"
            text = "Torna a casa a piedi che rischi che rischi la multa"
            imgMeme="assets/salvini-template.jpg"
        }
        if(result > 0.8) {
            bgClass = "text-center px-4 bg-result-danger flex flex-col justify-center items-center h-screen"
            text = "Se riesci a stare in piedi ti si n'eroe ma occhio che ti arrestano se ti beccano"
            imgMeme="assets/salvini-template.jpg"
        }
        if(result > 0 && props.userData.hasDrivenLicense) {
            bgClass = "text-center px-4 bg-result-danger flex flex-col justify-center items-center h-screen"
            text = "Sei un neopatentato, il limite è a 0, non puoi bere!"
            imgMeme="assets/salvini-meme-4.jpg"
        }
    return (
        <div>
            <main className={`base-class ${bgClass}`}>
                <div className="px-5 flex flex-col justify-center">
                    <h1 className="text-display-1 font-bold text-title my-6">{result.toFixed(2)} g/L</h1>
                    <h2 className="text-display-2 text-title">{text}</h2>
                    <div className="w-full flex justify-end items-center mt-8">
                        <img src="assets/info.svg" />
                    </div>
                </div>
                <div className="w-full h-72 flex flex-col justify-end">
                    <img src={imgMeme} className="img-fluid"/>
                </div>
            </main>
            
        
        </div>
    )
}