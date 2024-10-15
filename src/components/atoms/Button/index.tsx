import React from "react";
import { cn } from "../../../utils/cn";
import { ButtonProps } from "./Button.types";
import { cva } from "class-variance-authority";

export const btnVariants = cva(
  [
    "rounded-[12px]",
    "font-medium",
    "justify-center",
    "flex",
    "items-center",
    "gap-2",
  ],
  {
    variants: {
      variant: {
        default: ["bg-default-400", "text-white", "hover:bg-default-300"],
        primary: ["bg-primary-300", "text-black ", "hover:bg-primary-400"],
        secondary: ["bg-secondary-300", "text-white", "hover:bg-secondary-400"],
      },
      buttonSize: {
        sm: ["text-sm", "py-[8px]", "px-4"],
        md: ["text-sm", "py-[10px]", "px-6"],
        lg: ["text-md", "py-[14px]", "px-8", "font-semibold"],
      },
    },
    defaultVariants: {
      variant: "primary",
      buttonSize: "md",
    },
  }
);

export const Button = React.memo((props: ButtonProps) => {
  const {
    label,
    variant = "primary",
    rounded = false,
    buttonSize = "md",
    fill = false,
    leading,
    trailing,
    className,
    ...rest
  } = props;

  return (
    <button
      className={cn(
        btnVariants({ variant, buttonSize }),
        rounded && "rounded-full",
        fill && "w-full",
        className
      )}
      {...rest}
    >
      {leading}
      {label}
      {trailing}
    </button>
  );
});

Button.displayName = "Button";
