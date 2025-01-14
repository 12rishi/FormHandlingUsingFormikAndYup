import React from "react";
import { FormikPropsType } from "../../../types/types";

interface TextProps {
  formik: FormikPropsType;
}
const Text: React.FC<TextProps> = ({ formik }) => {
  return (
    <div>
      <label
        htmlFor="textInput"
        className="block text-sm font-medium text-gray-700"
      >
        Text Input
      </label>
      <input
        type="text"
        id="textInput"
        name="textInput"
        value={formik.values.textInput}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`mt-1 block w-full px-3 py-2 border ${
          formik.touched.textInput && formik.errors.textInput
            ? "border-red-500"
            : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
        placeholder="Enter text"
      />
      {formik.touched.textInput && formik.errors.textInput && (
        <div className="text-red-500 text-sm mt-1">
          {formik.errors.textInput}
        </div>
      )}
    </div>
  );
};

export default Text;
