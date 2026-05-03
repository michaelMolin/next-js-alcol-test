import {useState} from "react";
import type {UserInterface} from "../interfaces/UserInterface.ts";

export const useUserData = () => {
    const [userData, setUserData] = useState<UserInterface>({
        gender: '-', 
        weight: '50',
        hasEaten: false,
        hasDrivenLicense: true,
    })
    return {userData, setUserData}
}

export const genderFactor=( gender: string, hasEaten: boolean) => {
    if(gender == 'M' && hasEaten) {
        return 1.2;
    }
    if (gender == 'M' && !hasEaten) {
        return 0.7;
    }
    if(gender == 'F' && hasEaten) {
        return 0.9;
    }
    if (gender == 'F' && !hasEaten) {
        return 0.5;
    }

    return 0;
}