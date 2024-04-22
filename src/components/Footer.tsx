type footerProps = {
  isDark: boolean;
};

const Footer = ({ isDark }: footerProps) => {
  return (
    <div
      className={`${
        isDark
          ? "bg-light_dark_bg text-light_bg"
          : "bg-light_bg text-light_dark_bg"
      } text-center w-full py-2 font-bold duration-500`}
    >
      &copy; Rest Countries
    </div>
  );
};

export default Footer;
