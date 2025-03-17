import React from "react";
import EmployerForm from "./employerForm";
import Image from "next/image";
import ModalCardCTA from "./ui/modal-card-cta";
import clsx from "clsx";
import { useStateStore } from "@/store/store";
import { ChevronUp } from "lucide-react";

const Sidebar = () => {
  const { currentState } = useStateStore();

  const isBlurred = currentState === "initial";

  return (
    <div
      className={clsx(
        "bg-[#F8F9FD] text-black p-2 rounded-3xl w-[328px] h-full absolute blur-none inset-0 ",
        isBlurred ? "animate-movingShadow" : ""
      )}
    >
      <div className="flex gap-2 p-4 align-middle">
        <Image width={24} height={24} src="icons/data-entry.svg" alt="" />
        <h2>Data entry</h2>
        <Image width={20} height={20} src="icons/info.svg" alt="" />

        <ChevronUp color="#5C5C5E" className=" ml-auto" />
      </div>

      <EmployerForm />
      <ModalCardCTA />
    </div>
  );
};

export default Sidebar;
