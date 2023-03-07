import * as Yup from "yup";

export const FORM_VALIDATION = Yup.object().shape({
  productName: Yup.string().required("Lütfen ürün adı giriniz"),
});
