import { BaseTextFieldProps, CheckboxProps } from "@mui/material";
import { IMForm } from "./IMForm";

export type IMCheckbox = CheckboxProps & BaseTextFieldProps & {};
export type IMFormCheckbox = IMCheckbox & IMForm;
