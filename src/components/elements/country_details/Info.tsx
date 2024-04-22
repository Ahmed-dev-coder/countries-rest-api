const Info = ({
  title,
  value,
  isDark,
}: {
  title: string;
  value: string;
  isDark: boolean;
}) => {
  return (
    <li>
      {title}:{" "}
      <span
        className={`${
          isDark ? "text-gray-400" : "text-gray-500"
        } font-normal duration-300`}
      >
        {value}
      </span>
    </li>
  );
};

export default Info;
