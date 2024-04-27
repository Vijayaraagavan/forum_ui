import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/navigation/SideNav";
import { Grid, GridItem } from "@chakra-ui/react";
import { ThemeProvider } from "./modules/themes/UseTheme";
import Router from "./router/index";
import { SnackProvider } from "./components/SnackCtx";
import Snack from "./components/Snack";
import store from "./modules/stores/store";
import { Provider as StoreProvider } from "react-redux";
import InitProvider from "./modules/InitProvider";

function App() {
  return (
    <StoreProvider store={store}>
      <InitProvider>
        <ThemeProvider>
          <SnackProvider>
            <Snack />
            <Router />
          </SnackProvider>
        </ThemeProvider>
      </InitProvider>
    </StoreProvider>
  );
}

export default App;
