import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./Pages/home";

export const App = () => (
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);
