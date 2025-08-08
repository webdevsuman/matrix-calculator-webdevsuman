import React from "react";
import Routing from "./routing/Routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./layout/Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routing />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
