import React from "react";
import { Separator } from "./separator";

interface TextSeperatorProps {
  text: string;
}

const TextSeperator = ({ text }: TextSeperatorProps) => {
  return (
    <div className="flex items-center gap-2 w-full pt-2">
      <div className="w-full h-[1px] bg-white"></div>
      <span className="w-full text-center text-[9px] sm:text-xs  uppercase">
        {text}
      </span>
      <div className="w-full h-[1px] bg-white"></div>
    </div>
  );
};

export default TextSeperator;
