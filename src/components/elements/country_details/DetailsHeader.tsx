import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

type DetailsHeaderProps = {
  countryImage: string;
  isDark: boolean;
};

const DetailsHeader = ({ countryImage, isDark }: DetailsHeaderProps) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <Link to={"/"}>
        <button
          className={`${
            isDark ? "bg-light_dark_bg" : "bg-light_bg"
          } py-2 px-5 flex gap-2 items-center justify-center mb-12 rounded-sm shadow-lg text-sm duration-300`}
        >
          <ChevronLeft size={20} /> Back
        </button>
      </Link>
      <img
        className="mb-8 max-h-[260px] w-[343px] sm:w-[450px] lg:h-full"
        src={countryImage}
      />
    </div>
  );
};

export default DetailsHeader;
