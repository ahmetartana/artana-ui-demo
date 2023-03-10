import {
  Alert,
  AlertColor,
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { MSuspenseContext } from "../context";

interface IMSuspenseProvider {
  children?: React.ReactNode;
}

interface IMessage {
  text: string;
  type: AlertColor;
}

export function MSuspenseProvider(props: IMSuspenseProvider) {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState<string | string[]>("");
  const [message, setMessage] = useState<IMessage>(initialIMessage);
  const [snackOpen, setSnackOpen] = useState(false);

  const showStatusMessage = (param: AlertColor, param1?: string) => {
    if (param1) {
      setSnackOpen(true);
      setMessage({ type: param, text: String(param1) });
    }
  };

  return (
    <MSuspenseContext.Provider
      value={{
        loading: loading,
        disabled: disabled,
        error: error,
        hasError: Array.isArray(error) ? error.length > 0 : !!error,
        onSuspense: (value: boolean = false) => {
          setLoading(value);
          setDisabled(value);
        },
        setDisabled: (value: boolean = false) => setDisabled(value),
        setLoading: (value: boolean = false) => setLoading(value),
        showMessage: (param: AlertColor = "warning", param1 = "") =>
          showStatusMessage(param, param1),
        reset: () => {
          setLoading(false);
          setDisabled(false);
          setError("");
        },
      }}
    >
      <>
        <Backdrop
          open={loading}
          sx={{
            color: "#1976d2",
            zIndex: (theme) => theme.zIndex.drawer + 200,
          }}
        >
          <CircularProgress color="primary" />
        </Backdrop>
        {children}
        <Snackbar
          open={snackOpen}
          autoHideDuration={2000}
          onClose={() => {
            setSnackOpen(false);
          }}
        >
          <Alert
            onClose={() => {
              setSnackOpen(false);
            }}
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {message.text}
          </Alert>
        </Snackbar>
      </>
    </MSuspenseContext.Provider>
  );
}

const initialIMessage: IMessage = {
  text: "",
  type: "success",
};
