import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./demo";
import Btn1 from "./btn1";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Btn1 /> */}
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);
