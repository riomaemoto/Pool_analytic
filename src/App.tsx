import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/home";

export const App = () => (
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);
