import Info from "./country_details/Info";

type MainDetailsProps = {
  countryName: string;
  countryPopulation: string;
  countryRegion: string;
  countryCapital: string;
  isDark: boolean;
};

const MainDetails = ({
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
  isDark,
}: MainDetailsProps) => {
  return (
    <div className=" px-6 pt-6 pb-12">
      <h1 className=" text-lg font-black pb-4">{countryName}</h1>
      <ul className="text-sm flex flex-col gap-1">
        <Info title="Population" value={countryPopulation} isDark={isDark} />
        <Info title="Region" value={countryRegion} isDark={isDark} />
        <Info title="Capital" value={countryCapital} isDark={isDark} />
      </ul>
    </div>
  );
};

export default MainDetails;
