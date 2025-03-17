import React from "react";
import EmployerForm from "./employerForm";
import Image from "next/image";
import ModalCard from "./ui/modal-card";

const Sidebar = () => {
  return (
    <div className="bg-[#F8F9FD] text-black p-2 rounded-3xl w-[328px] h-full absolute blur-none inset-0">
      <div className="flex gap-2 p-4 align-middle">
        <Image width={24} height={24} src="icons/data-entry.svg" alt="" />
        <h2>Data entry</h2>
        <Image width={20} height={20} src="icons/info.svg" alt="" />
      </div>

      <EmployerForm />
      <ModalCard>
        <div>Modal content</div>
      </ModalCard>
    </div>
  );
};

export default Sidebar;
