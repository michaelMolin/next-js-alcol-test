import { useState } from "react";
import { WheelPicker, WheelPickerWrapper, type WheelPickerOption } from "@/components/wheel-picker/wheel-picker";

const options: WheelPickerOption[] = Array.from({ length: 81 }, (_, i) => ({
  label: `${i + 40} kg`,
  value: String(i + 40),
}));

export function WheelPickerKg(props: { weight: string; handleWeightFunction: (weight: string) => void }) {
  const [value, setValue] = useState(props.weight);

  return (
    <WheelPickerWrapper className="my-2 h-56 bg-[#F5F7FF] flex flex-col justify-around items-center">
      <WheelPicker
          optionItemHeight={70}
      classNames={{
        optionItem: "color-grey !text-[18px]",
        highlightWrapper: "bg-blue-200 border-2 border-blue",
        highlightItem: "font-bold text-[36px]",
      }}                  
        options={options}
        value={value}
        onValueChange={(val) => {
          setValue(val);
          props.handleWeightFunction(val);
        }}
      />
    </WheelPickerWrapper>
  );
}
