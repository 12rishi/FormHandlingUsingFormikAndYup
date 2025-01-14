import React from "react";
import { FormikPropsType } from "../../../types/types";
interface SelectProps {
  formik: FormikPropsType;
}
const Select: React.FC<SelectProps> = ({ formik }) => {
  return (
    <div>
      <label
        htmlFor="selectedOption"
        className="block text-sm font-medium text-gray-700"
      >
        Select Option
      </label>
      <select
        id="selectedOption"
        name="selectedOption"
        value={formik.values.selectedOption}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`mt-1 block w-full px-3 py-2 border ${
          formik.touched.selectedOption && formik.errors.selectedOption
            ? "border-red-500"
            : "border-gray-300"
        } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      >
        <option value="">-- Select an option --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {formik.touched.selectedOption && formik.errors.selectedOption && (
        <div className="text-red-500 text-sm mt-1">
          {formik.errors.selectedOption}
        </div>
      )}
    </div>
  );
};

export default Select;
