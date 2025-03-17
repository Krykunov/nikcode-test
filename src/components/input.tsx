import React from "react";

type Props = {
  title?: string;
};

const Input: React.FC<Props> = ({ title }) => {
  return (
    <div className="">
      <label htmlFor="first-name" className="text-gray-600 ">
        {title}
      </label>
      <input
        type="text"
        placeholder="Enter value"
        name="first-name"
        className="h-8 border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
      />
    </div>
  );
};

export default Input;
