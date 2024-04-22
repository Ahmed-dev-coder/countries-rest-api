import { Link } from "react-router-dom";

type DetailsBordersProps = {
  countryBorders: string[];
  isDark: boolean;
};

const DetailsBorders = ({ countryBorders, isDark }: DetailsBordersProps) => {
  return (
    <div>
      {countryBorders && (
        <div className="text-sm sm:text-base flex flex-col gap-4 tracking-wide">
          <span className="font-semibold">Border Countries: </span>

          <div className="flex mb-10 justify-center flex-wrap gap-4 md:justify-start">
            {countryBorders.map((border, index) => (
              <Link
                key={index}
                to={`/details/${border.toLowerCase()}`}
                className={`${
                  isDark ? "bg-light_dark_bg" : "bg-light_bg"
                } py-1 px-6 sm:py-2 sm:px-10 rounded shadow-lg tracking-widest duration-300`}
              >
                {border}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBorders;
