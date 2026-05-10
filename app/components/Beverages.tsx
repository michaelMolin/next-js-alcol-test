import CategoriesData from "../data/beveragesCategories.json"
import { BeverageCategoryInterface, BeverageInterface, BeverageSelectionInterface } from "../interfaces/BeverageInterface";
import BeverageList from "../data/beverages.json"
import BeverageSelection from "./beverages/BeverageSelection";
import NextStep from "@/app/components/NextStep";
import { useRef, useState } from "react"; 


export default function Beverages(props: BeverageSelectionInterface) {
    const categories: BeverageCategoryInterface[] = CategoriesData;
    const beverages: BeverageInterface[] = BeverageList
    const categoryBaseClasse = "px-4 py-2";
    const categorySelectedClass = "px-4 py-2 bg-blue-200 font-bold rounded-2xl mb-2 b-blue"
    const categoryUnderlineClass = "w-full h-1 rounded-full mb-2" 
    const categoryUnderlineSelectedClass = "w-full h-1 border-blue border rounded-full bg-blue"

    const checkCategoryId = (el: BeverageInterface, categoryId: string) => { return el.category_id === categoryId }
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>(categories[0].id)
    const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({})
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollToCategory = (categoryId: string) => {
        sectionRefs.current[categoryId]?.scrollIntoView({ behavior: "smooth" })
    }
    const handleScroll = () => {
        const container = scrollContainerRef.current
        if (!container) return
        const containerTop = container.getBoundingClientRect().top
        for (const [id, el] of Object.entries(sectionRefs.current)) {
            if (!el) continue
            const top = el.getBoundingClientRect().top - containerTop
            if (top >= 0 && top < 200) {
                setSelectedCategoryId(id)
                break
            }
        }
    }

    return (
        <div>
            <main className="flex flex-col justify-between items-center h-h-dvh bg-[#F7FAFF]">
                <div className="w-full h-85/100 flex flex-col">
                    <div className="pt-2 flex justify-start items-center bg-white w-full py-4">
                        <div onClick={props.prevStep} className="ml-4 mr-8">
                            <img src="assets/back.svg" alt="back img" />
                        </div>
                        <div>
                            <h1 className="text-display-2 font-bold text-title">SELEZIONA BEVANDE</h1>
                        </div>
                    </div>
                    <div className="mx-4 pt-5 flex items-center overflow-x-auto mb-4 shrink-0">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                onClick={() => scrollToCategory(category.id)}
                            >
                                <div className={`cursor-pointer ${selectedCategoryId == category.id ? categorySelectedClass : categoryBaseClasse}`}>
                                    <h2 className="text-display-3 text-title">{category.name}</h2>
                                </div>
                                
                                <div className={`base-class ${selectedCategoryId == category.id ? categoryUnderlineSelectedClass : categoryUnderlineClass}`}></div>
                            </div>
                        ))}
                    </div>
                    <div ref={scrollContainerRef} onScroll={handleScroll} className="overflow-y-auto flex-1">
                        {categories.map((category) => (
                            <div 
                                className="bg-[#DEE5F2]"
                                key={category.id}
                                ref={el => { sectionRefs.current[category.id] = el }}
                            >
                                <div className="px-4 py-6 bg-blue-200 text-title font-bold flex justify-between items-center">
                                    <h3 className="text-display-3">{category.name} {category.alcoholPercentageText}</h3>
                                    <img src="assets/info.svg" />
                                </div>
                                {beverages.filter(el => checkCategoryId(el, category.id)).map(beverage => (
                                    <BeverageSelection
                                        key={beverage.id}
                                        id={beverage.id}
                                        name={beverage.name}
                                        formatText={beverage.formatText}
                                        beverageData={props.beverageData}
                                        onQuantityChange={props.onQuantityChange}
                                        image={"src/assets/images/beverages/placeholder.jpg"}
                                        category_id={beverage.category_id} format={beverage.format}
                                        alcoholPercentage={0}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <NextStep text="CALCOLO" nextStepFunction={props.nextStep} />
            </main>
        </div>
    )
}