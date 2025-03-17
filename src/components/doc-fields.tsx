"use client";

"@/store/store";

import { useEffect, useState } from "react";
import DocField from "./doc-field";
import { autofillValues } from "./employerForm";
import { useStateStore } from "@/store/store";

const DocFields = () => {
  const { setIsLoading, currentState } = useStateStore();

  const [fieldsData, setFieldsData] = useState({
    firstName: "[Employer.FirstName]",
    lastName: "[Employer.LastName]",
    companyAddress: "[Employer.CompanyAddress]",
    companyName: "[Employer.CompanyName]",
  });

  useEffect(() => {
    if (currentState === "initial") return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setFieldsData(autofillValues);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentState]);

  return (
    <div className="flex flex-col gap-4 mt-50 items-start">
      <DocField value={fieldsData.firstName} />
      <DocField value={fieldsData.lastName} />
      <DocField value={fieldsData.companyAddress} />
      <DocField value={fieldsData.companyName} />
    </div>
  );
};

export default DocFields;
