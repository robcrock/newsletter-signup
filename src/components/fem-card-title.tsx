import React from "react";
import { CardTitle } from "./ui/card";

type Props = {
  title: string;
};

export const FemCardTitle = ({ title }: Props) => {
  return (
    <CardTitle className="text-[40px] font-bold md:text-5xl">{title}</CardTitle>
  );
};
