export default function Disclaimer(props: {"title": string, "text": string}) 
{
    return (
        <div className="w-full my-6">
            <h2 className="text-display-3 text-blue font-bold">{props.title}</h2>
            <p className="text-display-4 my-4">
                {props.text}
            </p>
            <div className="w-full flex justify-end items-center">
                <button className="w-1/2 py-3 border-2 border-blue rounded-2xl text-center bg-white">
                <span className="text-display-3 text-title font-bold">Approfondisci</span>
                </button>
            </div>
        </div>
    )
}