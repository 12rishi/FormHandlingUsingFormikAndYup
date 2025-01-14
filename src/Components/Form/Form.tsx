import React from "react";
import { useFormik } from "formik";

import Radio from "./Radio/Radio";
import Button from "./Button/Button";
import Text from "./Text/Text";
import { validationSchema } from "../../validation/validationSchema";
import Select from "./Select/Select";

export interface FormValues {
  textInput: string;
  selectedOption: string;
  radioOption: string;
}

const FormComponent: React.FC = () => {
  // Formik hook
  const formik = useFormik<FormValues>({
    initialValues: {
      textInput: "",
      selectedOption: "",
      radioOption: "",
    },
    validationSchema,
    onSubmit: (values, e) => {
      console.log("Form Data Submitted:", values);
      formik.handleReset(e);
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">
        Formik Form with useFormik (TypeScript)
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <Text formik={formik} />
        <Select formik={formik} />

        <Radio formik={formik} />

        <Button />
      </form>
    </div>
  );
};

export default FormComponent;
