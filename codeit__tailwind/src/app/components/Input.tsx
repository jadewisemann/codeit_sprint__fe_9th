import React from "react";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const sizeClasses = {
  sm: "p-2 text-sm",
  md: "p-4",
  lg: "p-8 text-lg",
};

const variantClasses = {
  default: "border bg-white",
  filled: "bg-red-200 border-0",
  outlined: "bg-transparent border",
};

const stateClasses = {
  error: "border-red-500",
};

const Input = ({
  id,
  type = "text",
  placeholder,
  label,
  error,
  size = "md",
  variant = "default",
  fullWidth = false,
  disabled = false,
  className = "",
  onChange,
}: InputProps) => {
  const defaultClasses = "rounded focus:outline-0 focus:ring transition-all";

  return (
    <>
      <div className="transition-all"></div>
    </>
  );
};

export default Input;
