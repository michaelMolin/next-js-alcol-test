import NextStep from "../NextStep"
import Disclaimer from "./Disclaimer"

export default function Homepage(props: {"nextStep": () => void}){
    return(
      <div>
        <main className=" flex flex-col justify-between items-center h-dvh">
          <div className="mt-2 px-5 h-85/100">
            <h1 className="w-full text-display-1 text-center text-title font-bold">
              Test di Autovalutazione del Tasso Alcolico
            </h1>
            <div className="flex justify-center my-4">
              <img src="assets/img-home.svg" alt="img home"/>
            </div>
        
            <Disclaimer 
              title="Perchè ti è utile questo test?" 
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
      
            <div className="w-full flex justify-center">
              <div className="w-2/10 h-2 border-blue border rounded-full bg-blue"></div>
            </div>

            <Disclaimer 
              title="Disclaimer di legge" 
              text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
          <NextStep text="INIZIAMO" nextStepFunction={props.nextStep} />    
        </main>
      </div>
    )
}