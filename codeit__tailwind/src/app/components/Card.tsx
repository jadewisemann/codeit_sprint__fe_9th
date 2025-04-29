import React from "react";
import { clsx } from "clsx";

type CardVariant = "default" | "outlined" | "elevated";

type CardPadding = "none" | "sm" | "md" | "lg";

type CardRadius = "none" | "sm" | "md" | "lg" | "full";

interface CardProps {
  variant?: CardVariant;
  padding: CardPadding;
  radius: CardRadius;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  default: "bg-white border border-gray-300",
  outlined: "bg-white border border-gray-600 hover:border-gray-700",
  elevated: "bg-white shadow hover:shadow-800",
};
const paddings = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};
const radiuses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const Card: React.FC<CardProps> = ({
  variant = "default",
  padding = "md",
  radius = "md",
  children,
  className = "",
  ...rest
}) => {
  const defaultClasses = "overflow-hidden transition-all";

  const classes = clsx(
    defaultClasses,
    variants[variant],
    paddings[padding],
    radiuses[radius],
    className,
  );

  return (
    <div className={classes} {...rest}>
      {children}
      <div className=""></div>
    </div>
  );
};

export default Card;
