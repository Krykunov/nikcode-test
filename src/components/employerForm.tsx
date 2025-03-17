import React from "react";
import Input from "./input";

const EmployerForm = () => {
  return (
    <div className="flex flex-col bg-[#FCFDFF] rounded-2xl p-3 gap-4">
      <h3>Employer</h3>
      <form action="" className="flex flex-col gap-4">
        <div>Missing</div>
        <Input title="First Name" />
        <Input title="Last Name" />
        <Input title="Company address" />
        <Input title="Company Name" />
      </form>
    </div>
  );
};

export default EmployerForm;
