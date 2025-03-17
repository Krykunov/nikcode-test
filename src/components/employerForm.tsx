"use client";

import React, { useEffect, useState } from "react";
import Input from "./input";
import { useStateStore } from "@/store/store";

const EmployerForm = () => {
  const { setIsLoading, currentState } = useStateStore();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyAddress: "",
    companyName: "",
  });

  const autofillValues = {
    firstName: "John",
    lastName: "Doe",
    companyAddress: "123 Main St, New York",
    companyName: "Tech Corp",
  };

  useEffect(() => {
    if (currentState !== "filled") return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setFormData(autofillValues);
      setIsLoading(false);
    }, 1000); // Artificial delay
    return () => clearTimeout(timeoutId);
  }, [currentState]);

  return (
    <div className="flex flex-col bg-[#FCFDFF] rounded-2xl p-3 gap-4">
      <h3>Employer</h3>
      <form className="flex flex-col gap-4">
        <div>Missing</div>
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
  );
};

export default EmployerForm;
