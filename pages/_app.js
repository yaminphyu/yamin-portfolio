import { ChakraProvider } from "@chakra-ui/react";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MobileSidebarProvider>
        <Component {...pageProps} />
      </MobileSidebarProvider>
    </ChakraProvider>
  );
}
