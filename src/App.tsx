import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default App;
