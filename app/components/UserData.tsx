import { UserComponentInterface } from "../interfaces/UserInterface"
export default function UserData(props : UserComponentInterface) {
    return (
        <div>
            <main className=" flex flex-col justify-between items-center h-full">
                <div className="mt-9 px-5">
                    <div onClick={props.prevStep}>
                        <img src="assets/back.svg" alt="back img" />
                    </div>
                    <div className="my-2 w-full h-2 border rounded-full bg-gray-300 relative">
                        <div className="absolute top-0 left-0 h-full rounded-full bg-blue transition-all duration-300"
                            style={{ width: `${(props.step / 4) * 100}%` }}                                                                                                                                  
                        />     
                    </div>
                    <div className="w-full fex text-center mb-6">
                        {props.step} di 4
                    </div>
                    <h1 className="w-full text-display-1 text-center text-title font-bold">
                        {props.title}
                    </h1>
                    <p className="text-display-4 my-4">
                        {props.text}
                    </p>
                    <div className="my-6 h-full flex flex-col justify-around items-center gap-24">
                        <div className="w-[230px] h-[230px] rounded-xl bg-blue-200 flex justify-center items-center">
                           <div className="flex flex-col justify-center items-center" onClick={props.box1function}>
                                 {props.box1image.length > 0 && 
                                    <img className="max-w-28" src={props.box1image} alt={props.box1name} />
                                }
                                <span className="text-display-2 font-bold mt-2 text-title">{props.box1name}</span>
                            </div>
                        </div>

                        <div className="w-[230px] h-[230px] rounded-xl bg-blue-200 flex justify-center items-center" >
                            <div className="flex flex-col justify-center items-center" onClick={props.box2function}>
                                {props.box2image.length > 0 && 
                                    <img className="max-w-28" src={props.box2image} alt={props.box2name} />
                                }
                                <span className="text-display-2 font-bold mt-2 text-title">{props.box2name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}