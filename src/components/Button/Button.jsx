import React from "react";
import "./Button.css";

export default function Button({
    children,
    variant = "primary",
    type = "button",
    onClick,
    disabled = false,
    full = false,
    ariaLabel,
}) {
  return (
    <button
        type={type}
      className={`btn btn--${variant} ${full ? "btn--full" : ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
        
    </button>
  );
}


