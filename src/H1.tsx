import { FC, ReactElement } from "react";
type headingProps = {
  title: string;
};
const H1: FC<headingProps> = ({ title }) => {
  return <h1 className=" text-4xl font-bold  mt-4 sm:mt-8 mb-4">{title}</h1>;
};

export default H1;
