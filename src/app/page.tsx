"use client";

import Document from "@/components/document";
import Sidebar from "@/components/sidebar";
import ModalCardFinish from "@/components/ui/modal-card-finish";
import { useStateStore } from "@/store/store";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentState, isFinished } = useStateStore();
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    if (currentState === "initial") setIsBlurred(true);
    else setIsBlurred(false);
  }, [currentState]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div
        className={clsx(
          "flex w-full h-full relative transition-all duration-500 ease-in-out",
          isFinished ? "blur-md" : "blur-0"
        )}
      >
        <main
          className={clsx(
            "flex w-full h-full flex-row justify-end gap-[32px] row-start-2 items-center sm:items-start transition-all duration-500 ease-in-out",
            isBlurred ? "blur-md bg-indigo-100" : "blur-0"
          )}
        >
          <Document />
        </main>
        <Sidebar />
      </div>
      <ModalCardFinish />
    </div>
  );
}
