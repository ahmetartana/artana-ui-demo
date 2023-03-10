import { AlertColor } from "@mui/material";
import React, { useContext } from "react";

interface IMSuspenseContext {
  loading: boolean;
  disabled: boolean;
  error: string | string[];
  hasError: boolean;
  onSuspense: (value?: boolean) => void;
  setDisabled: (value?: boolean) => void;
  setLoading: (value?: boolean) => void;
  showMessage: (param: AlertColor, param1?: string) => void;
  reset: () => void;
}

export const MSuspenseContext = React.createContext<IMSuspenseContext>({
  loading: false,
  disabled: false,
  error: "",
  hasError: false,
  onSuspense: function (value?: boolean | undefined): void {
    throw new Error("Function not implemented.");
  },
  setDisabled: function (value?: boolean | undefined): void {
    throw new Error("Function not implemented.");
  },
  setLoading: function (value?: boolean | undefined): void {
    throw new Error("Function not implemented.");
  },
  showMessage: function (param: AlertColor, param1?: string): void {
    throw new Error("Function not implemented.");
  },
  reset: function (): void {
    throw new Error("Function not implemented.");
  },
});

export const useSuspense = () => useContext(MSuspenseContext);
