import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { MSuspenseProvider } from "./packages/provider";
import { RouteList } from "./routes";

export const App = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
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
