import React from "react";

type ButtonColor =
  | "default"
  | "alternative"
  | "dark"
  | "light"
  | "green"
  | "red"
  | "yellow"
  | "purple";

interface ButtonProps {
  color?: ButtonColor;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  color = "default",
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...rest
}) => {
  const defaultClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const colors = {
    default: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500",
    alternative:
      "bg-white hover:bg-gray-100 text-blue-500 border border-blue-500 focus:ring-blue-500",
    dark: "bg-black hover:bg-gray-800 text-white focus:ring-gray-500",
    light:
      "bg-white hover:bg-gray-100 text-black border border-gray-300 focus:ring-gray-400",
    green: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    red: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
    yellow:
      "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",
    purple:
      "bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500",
  };

  return (
    <button
      type={type}
      className={`${defaultClasses} ${colors[color]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
