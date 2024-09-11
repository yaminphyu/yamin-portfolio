import { ChakraProvider } from "@chakra-ui/react";
import { MobileSidebarProvider } from "@/context/MobileSidebarContext";
import "@/styles/globals.css";
import { MobileStickyNavbarProvider } from "@/context/MobileStickyNavbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MobileSidebarProvider>
        <MobileStickyNavbarProvider>
          <Component {...pageProps} />
        </MobileStickyNavbarProvider>
      </MobileSidebarProvider>
    </ChakraProvider>
  );
}
