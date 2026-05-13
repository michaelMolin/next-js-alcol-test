import NextStep from "../NextStep"
import Disclaimer from "./Disclaimer"

export default function Homepage(props: {"nextStep": () => void}){
    return(
      <div>
        <main className=" flex flex-col justify-between items-center h-dvh">
          <div className="mt-2 px-5 h-80/100 flex flex-col justify-center items-center">
            <h1 className="w-full text-display-2 text-center text-title font-bold">
              Test di Autovalutazione del Tasso Alcolico
            </h1>
            <div className="flex justify-center my-8">
              <img className="h-24 w-20" src="assets/img-home.svg" alt="img home"/>
            </div>
        
            <div className="flex flex-col gap-6">
              <Disclaimer 
                title="Perchè ti è utile questo test?" 
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />

              <Disclaimer 
                title="Disclaimer di legge" 
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
          </div>
          <NextStep text="INIZIAMO" nextStepFunction={props.nextStep} />    
        </main>
      </div>
    )
}