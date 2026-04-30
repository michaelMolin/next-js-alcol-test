export interface UserInterface {
    gender: string;
    weight: number;
    hasEaten: boolean
    hasDrivenLicense: boolean
}

export interface UserComponentInterface {
    prevStep: () => void,
    step: number,
    text: string,
    title: string,
    box1name: string,
    box2name: string,
    box1image: string,
    box2image: string,
    box1function: () => void,
    box2function: () => void
}