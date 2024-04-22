import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/elements/country_details/CountryDetails";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("is_dark");
    if (data !== null) setIsDark(JSON.parse(data));
  }, []);

  return (
    <div
      className={`${
        isDark ? " bg-dark_bg text-light_bg" : " bg-dark_light_bg text-dark_bg"
      } duration-300 font-nunito`}
    >
      <BrowserRouter>
        <Header setIsDark={setIsDark} isDark={isDark} />
        <Routes>
          <Route path="/" element={<Hero isDark={isDark} />} />
          <Route
            path="details/:country"
            element={<CountryDetails isDark={isDark} />}
          />
        </Routes>
        <Footer isDark={isDark} />
      </BrowserRouter>
    </div>
  );
};

export default App;
