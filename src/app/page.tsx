"use client";

import Document from "@/components/document";
import Sidebar from "@/components/sidebar";
import { useStateStore } from "@/store/store";
import clsx from "clsx";

export default function Home() {
  const { currentState } = useStateStore();

  const isBlurred = currentState === "initial";

  return (
    <div className="flex w-full h-full relative">
      <main
        className={clsx(
          "flex w-full h-full flex-row justify-end gap-[32px] row-start-2 items-center sm:items-start transition-blur duration-200",
          isBlurred && "blur-md"
        )}
      >
        <Document />
      </main>
      <Sidebar />
    </div>
  );
}
