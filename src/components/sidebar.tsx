import React from "react";
import EmployerForm from "./employerForm";
import Image from "next/image";
import ModalCardCTA from "./ui/modal-card-cta";
import clsx from "clsx";
import { useStateStore } from "@/store/store";
import { ChevronDown, ChevronUp } from "lucide-react";

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

        <ChevronUp color="#afafaf" className=" ml-auto" />
      </div>

      <EmployerForm />
      <div className="flex justify-between items-center bg-[#FCFDFF] h-[52px] rounded-2xl gap-1 p-4 mt-2 shadow-custom">
        <h3 className="uppercase text-gray-600 text-sm">Document details</h3>
        <ChevronDown color="#afafaf" className=" ml-auto" />
      </div>

      <div className="flex justify-between items-center bg-[#FCFDFF] h-[52px] rounded-2xl gap-1 p-4 mt-2 shadow-custom">
        <h3 className="uppercase text-gray-600 text-sm">Employee</h3>
        <ChevronDown color="#afafaf" className=" ml-auto" />
      </div>
      <ModalCardCTA />
    </div>
  );
};

export default Sidebar;
