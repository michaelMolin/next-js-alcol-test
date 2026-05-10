import { UserComponentInterface } from "../interfaces/UserInterface"
import NextStep from "./NextStep"
import { WheelPickerKg } from "./WheelPickerKg"

export default function UserData(props : UserComponentInterface) {
    const rootBaseClass = props.step == 4 ? "w-full mt-2 px-5 h-85/100" : "mt-2 px-5 w-full"
    const textBoxClass = props.box1image.length > 0 ? "text-display-3 font-bold mt-2 text-title text-center" : 'text-display-0 font-bold mt-2 text-title text-center'
    return (
        <div>
            <main className="flex flex-col justify-between items-center h-dvh">
                <div className={`base-class ${rootBaseClass}`} >
                    <div className="flex justify-between items-center">
                        <div onClick={props.prevStep}>
                            <img src="assets/back.svg" alt="back img" />
                        </div>
                        <div className="my-4 w-full flex justify-end items-center">
                            <img src="assets/info.svg" />
                        </div>
                    </div>
                    <div className="my-2 w-full h-2 border rounded-full bg-gray-300 relative">
                        <div className="absolute top-0 left-0 h-full rounded-full bg-blue transition-all duration-300"
                            style={{ width: `${(props.step / 4) * 100}%` }}                                                                                                                                  
                        />     
                    </div>
                    <div className="w-full fex text-center">
                        {props.step} di 4
                    </div>
                   
                    <h1 className="w-full text-display-1 text-center text-title font-bold min-h-16">
                        {props.title}
                    </h1>
                    
                    <p className="text-display-4 my-4 min-h-8">
                         {props.text} 
                    </p>
                    {props.step !== 4 &&
                    <div className="flex flex-col justify-around items-center gap-18">
                        <div className="w-40 h-40 rounded-xl bg-box flex justify-center items-center">
                           <div className="flex flex-col justify-center items-center" 
                                onClick={() => { 
                                    navigator.vibrate?.(15)
                                    props.box1function()
                                }}
                            >
                                 {props.box1image.length > 0 && 
                                    <img className="max-w-32" src={props.box1image} alt={props.box1name} />
                                }
                                <span className={`base-class ${textBoxClass}`}>{props.box1name}</span>
                            </div>
                        </div>

                        <div className="w-40 h-40 rounded-xl bg-box flex justify-center items-center" >
                            <div className="flex flex-col justify-center items-center" 
                                onClick={() => { 
                                    navigator.vibrate?.(15)
                                    props.box2function()
                                }}
                            >
                                {props.box2image.length > 0 && 
                                    <img className="max-w-32" src={props.box2image} alt={props.box2name} />
                                }
                                <span className={`base-class ${textBoxClass}`}>{props.box2name}</span>
                            </div>
                        </div>
                    </div>
                    }
                    {props.step == 4 && 
                    <div className="my-6 flex flex-col justify-around items-center">
                        <WheelPickerKg weight={props.weight} handleWeightFunction={props.handleWeightFunction}/>
                    </div>
                    }
                    
                </div>
                {props.step == 4 && 
                    <NextStep text="PROSEGUI" nextStepFunction={props.nextStep} />    
                }
            </main>
        </div>
    )
}