import { useParams } from "react-router-dom";
import useFetch from "../../../useFetch";
import DetailsHeader from "./DetailsHeader";
import DetailsInfo from "./DetailsInfo";
import DetailsBorders from "./DetailsBorders";

type countriesProps = {
  countries: {
    flags: { png: string };
    name: {
      common: string;
    };
    cca3: string;
    borders: string[];
  }[];
};

type countryDetailsProps = {
  isDark: boolean;
};

const CountryDetails = ({ isDark }: countryDetailsProps) => {
  const { country } = useParams();
  const url = `https://restcountries.com/v3.1/alpha/${country}`;
  const { countries }: countriesProps = useFetch(url);

  return (
    <div className="px-4 pt-6 lg:pt-0 md:px-8 lg:px-12 flex flex-col items-center justify-center w-full min-h-screen">
      {countries.map((country) => (
        <div
          key={country.cca3.toLowerCase()}
          className="lg:flex md:gap-16 lg:items-center lg:w-full justify-center"
        >
          <DetailsHeader isDark={isDark} countryImage={country.flags.png} />

          <div className="lg:pt-20">
            <DetailsInfo isDark={isDark} countryName={country.name.common} />

            <DetailsBorders countryBorders={country.borders} isDark={isDark} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
