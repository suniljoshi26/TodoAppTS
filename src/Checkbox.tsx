import React, { FC, InputHTMLAttributes } from "react";
type CheckboxP = InputHTMLAttributes<HTMLInputElement>;
const Checkbox: FC<CheckboxP> = (props) => {
  return (
    <div>
      <input
        className="w-5 h-5  accent-yellow-400"
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Checkbox;
