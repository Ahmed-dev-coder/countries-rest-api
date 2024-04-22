import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { regions } from "../../data/data";

type searchFilterProps = {
  isDark: boolean;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setFilterRegion: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFilter = ({
  isDark,
  query,
  setQuery,
  setFilterRegion,
}: searchFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (region: string) => {
    setFilterRegion(`${region}`);
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full text-sm tracking-wide items-center lg:flex-row lg:justify-between">
      <div className="flex justify-center items-center mb-6 shadow-lg w-full sm:w-4/5 md:w-3/5 lg:mb-0 lg:w-[400px]">
        <button
          className={`${
            isDark ? "bg-light_dark_bg" : "bg-light_bg"
          } w-1/4 py-4 rounded-l-md duration-300`}
        >
          <Search
            className={`${
              isDark ? "" : "stroke-light_dark_bg"
            } w-full duration-300`}
            size={20}
          />
        </button>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a country..."
          className={`${
            isDark ? "bg-light_dark_bg" : "bg-light_bg text-light_dark_bg"
          } w-full py-4  px-2 focus:outline-none rounded-r-md search-cancel:hidden duration-300`}
        />
      </div>

      <div className="rounded-md w-full flex gap-1 flex-col relative sm:w-4/5 md:w-3/5 lg:w-[250px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isDark ? "bg-light_dark_bg" : "bg-light_bg text-light_dark_bg"
          } flex justify-between items-center w-full p-4 rounded-md shadow-lg duration-300`}
        >
          Filter by Region
          <ChevronDown size={16} />
        </button>

        <div
          className={`${isOpen ? "scale-100" : "scale-0 origin-top"} ${
            isDark ? "bg-light_dark_bg" : "bg-light_bg text-light_dark_bg"
          } absolute top-14 w-full flex flex-col items-start py-3 rounded-md shadow-lg duration-300 z-20`}
        >
          {regions.map((region) => (
            <button
              className={`${
                isDark ? "hover:bg-dark_bg" : "hover:bg-dark_light_bg"
              } p-3 w-full flex justify-start duration-300`}
              key={region.id}
              onClick={() => handleClick(region.id)}
            >
              {region.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
