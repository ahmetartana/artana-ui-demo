import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { IMCheckbox } from "../../types";

export const MCheckbox = (props: IMCheckbox): JSX.Element => {
  const { error, required, helperText, label, ...otherProps } = props;

  return (
    <FormControl
      required={required}
      error={error}
      component="fieldset"
      variant="standard"
    >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...otherProps} />}
          label={label}
        />
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
