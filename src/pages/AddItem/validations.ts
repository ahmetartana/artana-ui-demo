import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("Product name is required"),
});
