"use client"
import {useState} from "react";
import Homepage from "./components/homepage/Homepage";
import UserData from "./components/UserData";
import { useUserData } from "./hooks/UserHook";
import {useBeverageData} from "./hooks/BeverageHook";

import Beverages from "./components/Beverages";

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const nextStep = () => setStep(prev => prev +1)
  const prevStep = () => setStep(prev => prev -1)
  const {userData, setUserData} = useUserData();

  const { beverageData, handleQuantityChange, totalBeverages } = useBeverageData();


  const handleGenderChange = (gender: string) => {
        setUserData(prev => ({...prev, gender: gender}))
        nextStep()
    }
    const handleWeightChange = (weight: string) => {
        setUserData(prev => ({...prev, weight: weight}))
    }
    const handleHasEatenChange = (hasEaten: boolean) => {
        setUserData(prev => ({...prev, hasEaten: hasEaten}))
        nextStep()
    }

    const handleDrivingLicense = (hasDrivingLicense: boolean) => {
        setUserData(prev => ({...prev, hasDrivenLicense:hasDrivingLicense}))
        nextStep()
    }

  return (
    <div>
      {step == 0 && 
        <Homepage nextStep={nextStep} />
      }
      {step == 1 &&
        <UserData step={step} prevStep={prevStep}
          title="Selezionata il tuo SESSO"
          text="Il sesso biologico influisce sul metabolismo dell'alcol."
          box1name="UOMO"
          box1function={() => handleGenderChange('M')}
          box1image="assets/men.svg"
          box2name="DONNA"
          box2function={() => handleGenderChange('F')}
          box2image="assets/women.svg"
          nextStep={nextStep}
          handleWeightFunction={handleWeightChange}
          weight={userData.weight}
        />
      }
      {step == 2 &&
        <UserData step={step} prevStep={prevStep}
          title="Seleziona il tuo PESO"
          text="Espresso in chilogrammi (kg)."
          box1name="UOMO"
          box1function={() => handleGenderChange('M')}
          box1image="assets/men.svg"
          box2name="DONNA"
          box2function={() => handleGenderChange('F')}
          box2image="assets/women.svg"
          nextStep={nextStep}
          handleWeightFunction={handleWeightChange}
          weight={userData.weight}
        />
      }
      {step == 3 &&
        <UserData step={step} prevStep={prevStep}
          title="Condizione dello STOMACO"
          text="Il cibo nello stomaco rallenta l'assorbimento dell'alcol."
          box1name="Stomaco pieno"
          box1function={() => handleHasEatenChange(true)}
          box1image="assets/stomaco_pieno.svg"
          box2name="Stomaco vuoto"
          box2function={() => handleHasEatenChange(false)}
          box2image="assets/stomaco_vuoto.svg"
          nextStep={nextStep}
          handleWeightFunction={handleWeightChange}
          weight={userData.weight}
        />
      }
      {step == 4 &&
        <UserData step={step} prevStep={prevStep}
          title="Sei NEOPATENTATO?"
          text="Per i neopatentati il limite legale è 0,0 g/L."
          box1name="SI"
          box1function={() => handleDrivingLicense(true)}
          box1image=""
          box2name="NO"
          box2function={() => handleDrivingLicense(false)}
          box2image=""
          nextStep={nextStep}
          handleWeightFunction={handleWeightChange}
          weight={userData.weight}
        />
      }
      {step== 5 &&
        <Beverages
          prevStep={prevStep}
          nextStep={nextStep}
          beverageData={beverageData}
          onQuantityChange={handleQuantityChange}
          totalBeverages={totalBeverages}
        />
      }
    </div>
  );
}
