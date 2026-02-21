import { useState } from "react";

export default function ProductOptions({ options, radius, shape, type }) {
  // Estado para controlar qual opção está selecionada
  const [selectedValue, setSelectedValue] = useState(options[0]);

  return (
    <div className="flex gap-3 mb-6">
      {options.map((option, index) => {
        const isSelected = selectedValue === option;

        // Classes base para o formato e borda
        const baseClass =
          "cursor-pointer transition flex items-center justify-center";
        const shapeClass =
          shape === "square"
            ? "w-[46px] h-[46px] border border-[#CCCCCC]"
            : "w-[31px] h-[31px] rounded-full";

        const selectedClass = isSelected ? "border-[2px] border-primary" : "";

        return (
          <div
            key={index}
            onClick={() => setSelectedValue(option)}
            className={`${baseClass} ${shapeClass} ${selectedClass}`}
            style={shape === "square" && radius ? { borderRadius: radius } : {}}
          >
            {type === "text" ? (
              <span className="text-[24px] text-[#474747]">{option}</span>
            ) : (
              <div
                className="w-full h-full rounded-full border border-black/10"
                style={{ backgroundColor: option }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
