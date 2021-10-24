import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./pages/About";
import About from "./pages/Contact";
import About from "./pages/Projects";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
    <About />
    <Contact />
    <Projects />
  </>,
  document.getElementById("root")
);
