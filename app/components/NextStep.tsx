export default function NextStep(props: {'text' : string, 'nextStepFunction' : () => void})
 {
    return (
        <div className="bg-blue w-full h-15/100 flex justify-center items-center">
            <button onClick= {() => {
                    navigator.vibrate?.(15)
                    props.nextStepFunction()
                }    
            }
            className="text-white text-cta-advance font-bold">
                {props.text}
            </button>
        </div>
    )
}