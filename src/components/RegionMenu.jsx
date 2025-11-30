import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export const RegionMenu = () => {
  return (
    <div>
      <Select
        defaultValue={options[0]}
        options={options}
        classNamePrefix="rs"
        classNames={{
          control: () =>
            "flex h-12 items-center justify-between gap-12 transition-all rounded-md!border-none pl-4 pr-2 shadow md:h-14 bg-white text-gray-900",
          // indicatorSeparator: () => "hidden",
          menu: () => "bg-gray-100 text-gray-900",
          option: () => "cursor-pointer",
        }}
      />
    </div>
  );
};
