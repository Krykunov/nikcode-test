"use client";

import React, { useEffect, useState } from "react";
import Input from "./input";
import { useStateStore } from "@/store/store";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export const autofillValues = {
  firstName: "John",
  lastName: "Doe",
  companyAddress: "123 Main St, New York",
  companyName: "Tech Corp",
};

const EmployerForm = () => {
  const { setIsLoading, currentState } = useStateStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyAddress: "",
    companyName: "",
  });

  useEffect(() => {
    if (currentState !== "filled") return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setFormData(autofillValues);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentState]);

  return (
    <div className="flex flex-col bg-[#FCFDFF] rounded-2xl gap-4 shadow-custom">
      <div className="flex justify-between items-center gap-1 px-4 pt-4">
        <h3 className="uppercase text-gray-600 text-sm">Employer</h3>
        <div className="flex justify-between items-center gap-1">
          <span className="text-warning text-sm">4</span>
          <Image width={16} height={16} src="icons/missing.svg" alt="" />
          <ChevronUp color="#afafaf" className=" ml-auto" />
        </div>
      </div>

      <div className="rounded-3xl border-t-3 border-t-[#F6882F] p-4">
        <form className="flex flex-col gap-4 relative ">
          <div className="flex items-center gap-1">
            <Image width={20} height={20} src="icons/missing.svg" alt="" />
            <div className="uppercase text-warning">Missing</div>
          </div>

          <Input title="First Name" name="firstName" value={formData.firstName} setFormData={setFormData} />
          <Input title="Last Name" name="lastName" value={formData.lastName} setFormData={setFormData} />
          <Input
            title="Company address"
            name="companyAddress"
            value={formData.companyAddress}
            setFormData={setFormData}
          />
          <Input title="Company Name" name="companyName" value={formData.companyName} setFormData={setFormData} />
        </form>
      </div>
    </div>
  );
};

export default EmployerForm;
