import { VariantProps } from "class-variance-authority";
import React from "react";
import { btnVariants } from "./index";

type ButtonElement = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof btnVariants>;

export interface ButtonProps extends ButtonElement {
  label: string;
  rounded?: boolean;
  buttonSize?: "lg" | "md" | "sm";
  leading?: React.ReactElement;
  trailing?: React.ReactElement;
  variant?: "primary" | "secondary" | "default";
  fill?: boolean;
}
