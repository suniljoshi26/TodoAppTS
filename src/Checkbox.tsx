import React, { FC, InputHTMLAttributes } from "react";
type CheckboxP = InputHTMLAttributes<HTMLInputElement>;
const Checkbox: FC<CheckboxP> = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Checkbox;
