import { Controller } from "react-hook-form";
import { IMFormCheckbox } from "../../types";
import { MCheckbox } from "./MCheckbox";

export const MFormCheckbox = (props: IMFormCheckbox) => {
  const { control, ...others } = props;

  return (
    <Controller
      name={others.name || "controllerName"}
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <MCheckbox
          onChange={onChange}
          checked={value}
          {...others}
          error={!!error}
          helperText={error ? error.message : " "}
        />
      )}
    />
  );
};
