export default function FilterGroup({ title, inputType, options }) {
  return (
    <div className="mb-6">
      <h4 className="text-[14px] font-bold text-[#474747] mb-3">{title}</h4>
      <div className="space-y-3">
        {options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 text-[#474747] cursor-pointer hover:text-primary transition"
          >
            <input
              type={inputType}
              name={title}
              value={option.value || option.text}
              className="accent-primary w-[22px] h-[22px] cursor-pointer"
            />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
}
