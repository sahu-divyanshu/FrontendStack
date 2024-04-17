const Button = ({ label = "Label", width = "w-48", bgColor = "Logo" ,textColor="text-white"}) => {
  return (
    <button
      className={`h-10 rounded-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        `focus-visible:outline-` + bgColor
      } ${width} ${`bg-` + bgColor} ${textColor}`}
    >
      {label}
    </button>
  );
};
export default Button;