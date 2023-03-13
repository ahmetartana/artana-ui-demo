import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { CssBaseline, IconButton, PaletteMode } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MSuspenseProvider } from "./packages/provider";
import { RouteList } from "./routes";

export const App = (): JSX.Element => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <IconButton
        size="large"
        onClick={() => {
          setMode((state) => (state === "light" ? "dark" : "light"));
        }}
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <WbSunnyIcon />}
      </IconButton>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MSuspenseProvider>
          <BrowserRouter>
            <RouteList />
          </BrowserRouter>
        </MSuspenseProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
