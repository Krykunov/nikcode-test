import React from "react";

type Props = {
  title: string;
  clickHandler: () => void;
};

const Button: React.FC<Props> = ({ title, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="flex bg-primary text-white px-6 py-[10px] rounded-lg cursor-pointer relative"
    >
      {title}
    </div>
  );
};

export default Button;
