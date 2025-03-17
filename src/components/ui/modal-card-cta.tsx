"use client";

import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import { useStateStore } from "@/store/store";
import clsx from "clsx";

const ModalCardCTA = () => {
  const { currentState, setCurrentState } = useStateStore();

  const [isVisible, setIsVisible] = useState(false);

  const isShow = currentState === "initial" && isVisible;

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={clsx(
        "transition-all duration-700 ease-out transform flex gap-4 flex-col absolute w-[328px] rounded-4xl p-6 text-white bg-gradient-to-r from-[#34245D] via-[#313266] to-[#36405E] -right-[110%]",
        isShow ? "opacity-100 -translate-y-85" : "opacity-0 -translate-y-200"
      )}
    >
      <Image width={24} height={24} src="icons/tip.svg" className="absolute -left-4 top-7" alt="" />
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="bg-[#F8F4FF] rounded-2xl w-12 h-12 flex items-center justify-center">
          <Image width={24} height={24} src="icons/data-entry.svg" alt="" />
        </div>
        <div className="text-lg font-medium">Data Entry</div>
      </div>
      <p className="text-md font-medium">
        Do not spend too much time filling out the same information again and again.
      </p>
      <div className="flex justify-end">
        <Button title="Autofill" clickHandler={() => setCurrentState("filled")} />
      </div>
    </div>
  );
};

export default ModalCardCTA;
