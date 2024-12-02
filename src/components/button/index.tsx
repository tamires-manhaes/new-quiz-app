

import { ButtonProps } from "./types";

export function Button({ label, variant, disabled, active, enable,  icon  }: ButtonProps){
  return (
    <button
      id="action-button"
      className={
        `
          ${variant === 'correct' ? 'bg-feedback-greenLight hover:bg-feedback-greenDark ' : 'bg-base-grey2'}
          ${variant === 'incorrect' ? 'bg-feedback-redLight hover:bg-feedback-redDark' : 'bg-base-grey2'}
          ${disabled  ? 'bg-base-grey2 cursor-not-allowed hover:opacity-5' : 'bg-base-grey3'}
          transition-all p-2 rounded-pill
        `}
      >
        {icon ? icon : label}
      </button>
  )
};
