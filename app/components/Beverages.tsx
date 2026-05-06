import CategoriesData from "../data/beveragesCategories.json"
import { BeverageCategoryInterface, BeverageInterface, BeverageSelectionInterface } from "../interfaces/BeverageInterface";
import BeverageList from "../data/beverages.json"
import BeverageSelection from "./BeverageSelection";

export default function Beverages(props: BeverageSelectionInterface) {
    const categories: BeverageCategoryInterface[] = CategoriesData;
    const beverages: BeverageInterface[] = BeverageList
    const categoryBaseClasse = "mx-2 px-4 py-2";
    const categorySelectedClass= "mx-2 px-4 py-2 bg-blue-200"
    const checkCategoryId = (el : BeverageInterface, categoryId : string) => {return el.category_id === categoryId} 
    let selectedCategoryId = "1"

    return(
         <div>
            <main className="flex flex-col justify-between items-center h-screen bg-[#F7FAFF]">
                <div className="mt-9 w-full">
                    <div className="flex justify-start items-center bg-white w-full py-4">
                        <div onClick={props.prevStep} className="ml-4 mr-8">
                            <img src="assets/back.svg" alt="back img" />
                        </div>
                        <div>
                            <h1 className="text-display-2 font-bold">SELEZIONA BEVANDE</h1>
                        </div>
                    </div>
                    <div className="px-2 pt-5 flex items-center overflow-x-auto mb-4">
                        {categories.map((category) =>  (
                                <div key={category.id} className={`base-class ${selectedCategoryId == category.id ? categorySelectedClass : categoryBaseClasse}`}>
                                    <h2 className="text-display-3 font-bold text-title">{category.name}</h2>
                                </div>
                            )
                        )}
                    </div>
                    <div>
                        {categories.map((category) =>  (
                                <div key={category.id}>
                                    <div className="px-4 py-6 bg-blue-200 text-title font-bold flex justify-between items-center">
                                        <h3 className="text-display-2">{category.name} {category.alcoholPercentageText}</h3>
                                        <img src="assets/info.svg"/>
                                    </div>
                                   {beverages.filter(el => checkCategoryId(el, category.id)).map(beverage => (      
                                        <BeverageSelection 
                                        key={beverage.id} 
                                        id={beverage.id} 
                                        name={beverage.name} 
                                        beverageData={props.beverageData} 
                                        onQuantityChange={props.onQuantityChange}
                                        image={"src/assets/images/beverages/placeholder.jpg"}
                                        category_id={beverage.category_id} format={beverage.format}
                                        alcoholPercentage={0}
                                        />
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            
            </main>
        </div>
    )
}