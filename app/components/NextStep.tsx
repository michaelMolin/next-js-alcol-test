export default function NextStep(props: {'text' : string, 'nextStepFunction' : () => void})
 {
    return (
        <div className="bg-blue w-full h-20/100 flex justify-center items-center">
            <button onClick= {() => {
                    navigator.vibrate?.(15)
                    props.nextStepFunction()
                }    
            }
            className="text-white text-cta-advance font-bold flex justify-between items-center gap-4">
                {props.text}
                <img src="assets/arrow-next.svg" />
            </button>
        </div>
    )
}