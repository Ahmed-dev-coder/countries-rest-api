import { Moon } from "lucide-react";

type headerProps = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
};

const Header = ({ setIsDark, isDark }: headerProps) => {
  const handleToggle = () => {
    setIsDark(!isDark);
    localStorage.setItem("is_dark", JSON.stringify(!isDark));
  };

  return (
    <div
      className={`${
        isDark ? "bg-light_dark_bg" : "bg-light_bg text-light_dark_bg"
      } flex justify-between items-center py-6 px-4 sticky top-0 z-50 shadow-lg text-sm tracking-wide md:px-8 lg:px-12 duration-300`}
    >
      <div className="font-bold">Where in the world?</div>

      <div
        onClick={handleToggle}
        className="flex justify-center items-center gap-2 cursor-pointer"
      >
        <Moon
          className={`${
            isDark ? "fill-light_bg stroke-none" : "stroke-light_dark_bg"
          } duration-300`}
        />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
