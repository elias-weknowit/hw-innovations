
export interface SelectTypeTabsProps {
  tabs: string[];
  onSelect: (tab: string) => void;
  selectedTab: string;
  className?: string;
}

export default function SelectTypeTabs({ tabs, selectedTab, onSelect, className = "" }: SelectTypeTabsProps) {
  return (
    <div className={className + " flex flex-row justify-center items-center"}>
      {tabs.map((tab, idx) => (
        <div
          key={tab}
          className={`flex  flex-grow flex-shrink-0 basis-0 flex-row justify-center items-center cursor-pointer ${tab === selectedTab
            ? "bg-primary-color text-white shadow-md"
            : "bg-white text-primary-color"
            }
          ${idx === 0 ? "rounded-l-3xl" : ""} ${idx === tabs.length - 1 ? "rounded-r-3xl" : ""}`}
          onClick={() => onSelect(tab)}
        >
          <p className="font-mulish font-semibold p-2">{idx == 0 ? "Jobb" : "Arbetskraft"}</p>
        </div>
      ))}
    </div>
  );
}