import React from "react";
import Header from "./ui/Header";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>Hello !</div>
    </ThemeProvider>
  );
}

export default App;
