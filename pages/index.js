/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { AR_One_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import MobileSidebar from "@/components/Mobile/MobileSidebar";
import { useContext } from "react";
import { MobileSidebarContext } from "@/context/MobileSidebarContext";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
});

export default function Home() {
  const { toggle } = useContext(MobileSidebarContext);
  
  return (
    <Container maxW='container.full' className={`${arOneSans.className} w-full h-screen !p-0`}>
      <Head>
        <title>{process.env.PROJECT_NAME}</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <NavBar />
      { toggle && <MobileSidebar /> }
    </Container>
  );
}
