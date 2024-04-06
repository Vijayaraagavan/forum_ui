import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import SideNav from "./components/SideNav";
import { Grid, GridItem } from "@chakra-ui/react";
import { ThemeProvider } from "./modules/themes/UseTheme";
import Router from "./router/index";
function App() {
  // console.log('re init with rend')
  return (
    <ThemeProvider>
      {/* <ChakraProvider> */}
      <Grid templateColumns="repeat(12,1fr)" gap={6}>
        <GridItem colSpan="1">
          <SideNav />
        </GridItem>
        <GridItem colSpan="11">
          <Router></Router>
        </GridItem>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
