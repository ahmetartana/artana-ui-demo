import { ButtonProps } from "@mui/material";

export type IMButton = ButtonProps & {
  isloading?: boolean;
  loadingComponent?: any;
  type?: "submit" | "reset" | "button";
  missingValidation?: any;
  showSnackbarMessage?: boolean;
};
