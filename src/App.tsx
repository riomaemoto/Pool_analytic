import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ChakraProvider>
);
