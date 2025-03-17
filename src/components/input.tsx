import { useStateStore } from "@/store/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  name: string;
  value: string;
  setFormData: React.Dispatch<
    React.SetStateAction<{ firstName: string; lastName: string; companyAddress: string; companyName: string }>
  >;
};

const Input: React.FC<Props> = ({ title, name, value, setFormData }) => {
  const { isLoading, currentState } = useStateStore();
  const [animatedValue, setAnimatedValue] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-start gap-2 items-center">
        <label htmlFor={name} className="text-gray-600 text-md">
          {title}
        </label>
        <span className="flex items-center justify-center rounded-sm text-[10px] p-2 bg-gray-200 h-4 w-4 text-gray-500">
          5
        </span>
        <Image className="ml-auto" width={16} height={16} src="/icons/copypaste.svg" alt="Copy" />
      </div>
      <div className="relative w-full ">
        <input
          type="text"
          id={name}
          name={name}
          value={animatedValue}
          onChange={handleChange}
          placeholder={currentState !== "initial" ? "" : "Enter value"}
          disabled={isLoading}
          className="h-8 border border-gray-300 rounded-md px-3 py-2 w-full text-sm bg-white"
        />
        {isLoading && (
          <div className="absolute top-2 left-2 w-66 h-4 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse rounded-sm"></div>
        )}
      </div>
    </div>
  );
};

export default Input;
