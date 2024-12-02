
import { ReactNode } from "react";

export const variants = ["enable", "correct", "incorrect"] as const;
export type Variant = (typeof variants)[number];

export interface ButtonProps {
  variant?: Variant;
  active?: boolean;
  enable?: boolean;
  disabled?: boolean;
  label?: string;
  icon?: ReactNode;
}
