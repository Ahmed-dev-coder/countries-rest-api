import useDetailsData from "../../../data/data";
import Info from "./Info";

type DetailsInfoProps = {
  isDark: boolean;
  countryName: string;
};

const DetailsInfo = ({ isDark, countryName }: DetailsInfoProps) => {
  const { countriesDetails, countriesDomain } = useDetailsData();
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:gap-8">
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
          {countryName}
        </h1>
        <ul className="pt-4 pb-9 flex flex-col gap-2 text-sm sm:text-base font-semibold tracking-wide">
          {countriesDetails.map((data) => (
            <Info
              key={data.id}
              title={data.title}
              value={data.info}
              isDark={isDark}
            />
          ))}
        </ul>
      </div>

      <ul className="pb-9 flex flex-col gap-2 text-sm sm:text-base font-semibold tracking-wide">
        {countriesDomain.map((data) => (
          <Info
            key={data.id}
            title={data.title}
            value={data.info}
            isDark={isDark}
          />
        ))}
      </ul>
    </div>
  );
};

export default DetailsInfo;
