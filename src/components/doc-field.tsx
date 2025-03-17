"use client";

import React, { useEffect, useState } from "react";
import { useStateStore } from "@/store/store";
import { clsx } from "clsx";

type Props = {
  value: string;
};

const DocField: React.FC<Props> = ({ value }) => {
  const { isLoading, currentState } = useStateStore();
  const [animatedValue, setAnimatedValue] = useState("");

  const isFilled = currentState !== "initial";

  const inputValue = isFilled ? animatedValue : value;

  useEffect(() => {
    if (!value) {
      setAnimatedValue("");
      return;
    }

    let i = 0;
    setAnimatedValue("");
    const interval = setInterval(() => {
      if (i <= value.length) {
        setAnimatedValue(value.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span
      className={clsx(
        "border-b-2 relative transition-all duration-300 h-6 text-sm/4",
        isLoading
          ? "border-b-warning bg-[#fafafa] text-[#fafafa]"
          : isFilled
          ? "p-1 border-b-green-700  bg-green-200"
          : "p-1 border-b-warning  bg-warning-bg"
      )}
    >
      {inputValue}
      {isLoading && (
        <div className="absolute w-full b-0 top-0 r-0 l-0 h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse"></div>
      )}
    </span>
  );
};

export default DocField;
