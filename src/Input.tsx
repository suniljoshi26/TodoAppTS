import React, { FC, InputHTMLAttributes, useState } from "react";
type Inpyt = InputHTMLAttributes<HTMLInputElement>;
const Input: FC<Inpyt> = (props) => {
  return (
    <div>
      <input
        //value={props.value}
        // onChange={props.onChange}
        {...props}
        className="p-2 border border-gray-300   w-44 sm:w-72  rounded-md "
        placeholder="Write an artical about XState"
      />
    </div>
  );
};

export default Input;
