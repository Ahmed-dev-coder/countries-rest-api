import { useMemo } from "react";
import { Link } from "react-router-dom";
import MainDetails from "./MainDetails";

type countriesProps = {
  countries: {
    flags: { png: string };
    name: {
      common: string;
      nativeName: Record<string, { common: string }>;
    };
    population: string;
    region: string;
    capital: string;
    cca3: string;
  }[];
  loading: boolean;
  isDark: boolean;
  currentPage: number;
  query: string;
  countriesPerPage: number;
  filterRegion: string;
};

const Countries = ({
  countries,
  loading,
  isDark,
  currentPage,
  query,
  countriesPerPage,
  filterRegion,
}: countriesProps) => {
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const filterCountries = useMemo(() => {
    return countries.filter((country) => {
      if (country.region === filterRegion) {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      } else if (filterRegion === "All") {
        return (
          country.name.common.toLowerCase().includes(query.toLowerCase()) ||
          country.region.toLowerCase().includes(query.toLowerCase())
        );
      }
    });
  }, [countries, query, filterRegion]);

  const currentCountries = filterCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  if (loading) {
    return <h1 className="text-center my-10">Loading.....</h1>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 justify-center items-center py-10 gap-10 tracking-wider place-items-center sm:grid-cols-2 lg:grid-cols-3 min-[1360px]:grid-cols-4">
        {currentCountries.map((country) => (
          <Link
            to={`/details/${country.cca3.toLowerCase()}`}
            key={country.cca3.toLowerCase()}
            className={`${country.name.common === "Israel" ? "hidden" : ""} ${
              isDark ? "bg-light_dark_bg" : "bg-light_bg text-light_dark_bg"
            } hover:scale-105 font-bold w-[300px] rounded-md shadow-lg duration-300`}
          >
            <img
              src={country.flags.png}
              className="rounded-t-md h-[170px] object-center w-full"
            />
            <MainDetails
              countryName={country.name.common}
              countryPopulation={country.population.toLocaleString()}
              countryRegion={country.region}
              countryCapital={country.capital}
              isDark={isDark}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
