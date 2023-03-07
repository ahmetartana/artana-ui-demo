import { TextField } from "@mui/material";
import { IMInput } from "../../types";

export const MInput = (props: IMInput): JSX.Element => {
  const { fullWidth = true, ...otherProps } = props;

  return <TextField size="small" fullWidth={fullWidth} {...otherProps} />;
};
