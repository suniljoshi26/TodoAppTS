import React, { FC } from "react";
type h3 = {
  title: string;
};
const H3: FC<h3> = ({ title }) => {
  return (
    <div>
      <h3 className=" text-2xl font-semibold mt-4">{title}</h3>
    </div>
  );
};

export default H3;
