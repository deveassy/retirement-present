import React from "react";
import { GlobalStyle } from "./global/styles";
import RootRouter from "./routes";
// import { ThemeProvider } from "styled-components";

function RenderApp() {
  return (
    <div>
      <GlobalStyle />
      <RootRouter />
    </div>
  );
}

function App() {
  return (
    <div>
      <RenderApp />
    </div>
  );
}

export default App;
