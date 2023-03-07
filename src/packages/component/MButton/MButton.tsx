import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { IMButton } from "../../types";

export const MButton = (props: IMButton): JSX.Element => {
  const {
    children,
    isloading,
    loadingComponent,
    type = "submit",
    onClick,
    color,
    variant = "text",
    disabled,
    ...otherProps
  } = props;

  const handleOnclick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    onClick && onClick(e);
  };

  const getButtonColorByType = useCallback(() => {
    if (color) {
      return color;
    }

    switch (type) {
      case "submit":
        return "success";
      case "reset":
        return "error";
      default:
        return "primary";
    }
  }, [color, type]);

  return (
    <Button
      {...otherProps}
      type={type}
      variant={variant}
      disabled={isloading || disabled}
      color={getButtonColorByType()}
      onClick={handleOnclick}
    >
      {!isloading ? children : loadingComponent}
    </Button>
  );
};
