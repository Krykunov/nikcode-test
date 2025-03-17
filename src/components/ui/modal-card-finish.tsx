"use client";

import Button from "./button";
import Image from "next/image";
import { useStateStore } from "@/store/store";
import clsx from "clsx";

const ModalCardFinish = () => {
  const { isFinished, setIsFinished } = useStateStore();

  const finishHandler = () => {
    setIsFinished(false);
  };

  return (
    <div
      className={clsx(
        "absolute m-auto transition-all duration-500 ease-out flex justify-between items-center gap-4 flex-col w-[544px] h-[400px] rounded-4xl p-6 text-white bg-gradient-to-r from-[#34245D] via-[#313266] to-[#36405E] ",
        isFinished ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      <div className="text-3xl font-medium">Great!</div>

      <Image width={200} height={200} src="icons/check.svg" className="" alt="" />
      <p className="text-lg">Congrats on completing the tour!</p>

      <div className="flex justify-center">
        <Button title="Continue" clickHandler={finishHandler} />
      </div>
    </div>
  );
};

export default ModalCardFinish;
