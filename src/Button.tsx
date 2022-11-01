import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  them?: "highlight" | "secondary" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ them, className, ...rest }) => {
  let themClass =
    " text-white rounded-md bg-yellow-500 border-transparent  hover:bg-yellow-600 ";
  let radiusClass = "rounded-md";
  if (them === "highlight") {
    radiusClass = " mt-2 rounded-full";
  }
  if (them === "secondary") {
    themClass = "text-gray-900 bg-white  border-gray-300 hover:bg-gray-600";
  }

  return (
    <button
      className={
        "px-4 py-2 text-sm font-medium  border  shadow-sm disabled:bg-gray-400 " +
        className +
        themClass +
        radiusClass
      }
      {...rest}
    ></button>
  );
};
Button.defaultProps = {
  them: "primary",
};

export default Button;
