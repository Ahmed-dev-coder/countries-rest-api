import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

export const regions = [
  {
    id: "All",
    title: "All Countries",
  },
  {
    id: "Africa",
    title: "Africa",
  },
  {
    id: "Americas",
    title: "America",
  },
  {
    id: "Asia",
    title: "Asia",
  },
  {
    id: "Europe",
    title: "Europe",
  },
  {
    id: "Oceania",
    title: "Oceania",
  },
];

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
    subregion: string;
    tld: [];
    currencies: Record<string, { name: string }>;
    languages: Record<string, string>;
    cca3: string;
    ccn3: string;
    borders: string[];
  }[];
};
const useDetailsData = () => {
  const { country } = useParams();
  const url = `https://restcountries.com/v3.1/alpha/${country}`;
  const { countries }: countriesProps = useFetch(url);

  const countriesDetails = [
    {
      id: "nativeName",
      title: "Native Name",
      info: countries
        .map((country) => Object.values(country.name.nativeName)[0].common)
        .toString(),
    },
    {
      id: "population",
      title: "Population",
      info: countries
        .map((country) => country.population)
        .toLocaleString()
        .toString(),
    },
    {
      id: "region",
      title: "Region",
      info: countries.map((country) => country.region).toString(),
    },
    {
      id: "subRegion",
      title: "Sub Region",
      info: countries.map((country) => country.subregion).toString(),
    },
    {
      id: "capital",
      title: "Capital",
      info: countries.map((country) => country.capital).toString(),
    },
  ];

  const countriesDomain = [
    {
      id: "topLevelDomain",
      title: "Top Level Domain",
      info: countries
        .map((country) => Object.values(country.tld)[0])
        .toString(),
    },
    {
      id: "currencies",
      title: "Currencies",
      info: countries
        .map((country) => Object.values(country.currencies)[0].name)
        .toString(),
    },
    {
      id: "languages",
      title: "Languages",
      info: countries
        .map((country) => Object.values(country.languages).join(", "))
        .toString(),
    },
  ];

  return { countriesDetails, countriesDomain };
};

export default useDetailsData;
