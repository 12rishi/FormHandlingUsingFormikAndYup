import React from "react";
import { FormikPropsType } from "../../../types/types";

interface RadioProps {
  formik: FormikPropsType;
}
const Radio: React.FC<RadioProps> = ({ formik }) => {
  return (
    <div>
      <p className="block text-sm font-medium text-gray-700">
        Choose an Option:
      </p>
      <div className="mt-2 space-y-2">
        <div>
          <input
            type="radio"
            id="radioOption1"
            name="radioOption"
            value="radio1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.radioOption === "radio1"}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label htmlFor="radioOption1" className="ml-2 text-sm text-gray-700">
            Radio 1
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="radioOption2"
            name="radioOption"
            value="radio2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.radioOption === "radio2"}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label htmlFor="radioOption2" className="ml-2 text-sm text-gray-700">
            Radio 2
          </label>
        </div>
      </div>
      {formik.touched.radioOption && formik.errors.radioOption && (
        <div className="text-red-500 text-sm mt-1">
          {formik.errors.radioOption}
        </div>
      )}
    </div>
  );
};

export default Radio;
