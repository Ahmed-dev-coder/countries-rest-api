import { useState } from "react";
import Countries from "./elements/Countries";
import SearchFilter from "./elements/SearchFilter";
import { Pagination, createTheme, ThemeProvider } from "@mui/material";
import useFetch from "../useFetch";
import { useSearchParams } from "react-router-dom";

const dark = createTheme({
  palette: {
    text: {
      primary: "#fff",
    },
    primary: {
      main: "#2b3743",
      dark: "#2b3743",
    },
  },
});

const light = createTheme({
  palette: {
    text: {
      primary: "#000",
    },
    primary: {
      main: "#000",
    },
  },
});

type heroProps = {
  isDark: boolean;
};

const Hero = ({ isDark }: heroProps) => {
  const { countries, loading } = useFetch("https://restcountries.com/v3.1/all");
  const countriesPerPage = 12;
  const pageCount = Math.ceil(countries.length / countriesPerPage);

  // query parameter
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" });
  const currentPage = Number(searchParams.get("page"));

  const handleChange = (_e: unknown, value: number) => {
    setSearchParams({ page: value.toString() });
  };

  // Search Bar
  const [query, setQuery] = useState("");

  // Filter Field
  const [filterRegion, setFilterRegion] = useState("All");

  return (
    <div className="px-4 pt-6 md:px-8 lg:px-12 min-h-screen">
      <SearchFilter
        query={query}
        setQuery={setQuery}
        isDark={isDark}
        setFilterRegion={setFilterRegion}
      />
      <Countries
        countries={countries}
        loading={loading}
        isDark={isDark}
        currentPage={currentPage}
        query={query}
        countriesPerPage={countriesPerPage}
        filterRegion={filterRegion}
      />
      <ThemeProvider theme={isDark ? dark : light}>
        <Pagination
          defaultPage={currentPage}
          count={pageCount}
          shape="rounded"
          color="primary"
          onChange={handleChange}
          className="flex justify-center items-center mb-6"
        />
      </ThemeProvider>
    </div>
  );
};

export default Hero;
