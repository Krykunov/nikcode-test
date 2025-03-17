import React from "react";

type Props = {
  children: React.ReactNode;
  tip?: string;
  size?: "small" | "medium" | "large";
};

const ModalCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="absolute w-[300px] h-[200px] rounded-3xl p-6 text-white top-20 right-[-100%] bg-linear-to-r from-[#34245D] via-[#313266] to-[#36405E]">
      {children}
    </div>
  );
};

export default ModalCard;
