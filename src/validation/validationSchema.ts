import * as Yup from "yup";
export const validationSchema = Yup.object({
  textInput: Yup.string()
    .required("Text input is required")
    .min(3, "Text input must be at least 3 characters long"),
  selectedOption: Yup.string().required("Please select an option"),
  radioOption: Yup.string().required("Please select a radio option"),
});
