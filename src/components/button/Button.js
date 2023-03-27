import React from "react";

const Button = ({
  onClick,
  className = "",
  full = false,
  mtAuto = false,
  square = false,
  type = "button",
  bgColor = "primary",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 ${square ? "px-2" : "px-4"}  border border-slate-900 ${
        mtAuto ? "mt-auto" : ""
      } ${full ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
