/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { AR_One_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useContext, useEffect } from "react";
import { MobileSidebarContext } from "@/context/MobileSidebarContext";
import useWindowDimension from "@/hooks/useWindowDimension";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import MobileStickyNav from "@/components/Mobile/MobileStickyNav";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import ScrollUpButton from "@/components/ScrollUpButton";
import MyContacts from "@/components/MyContacts";

const arOneSans = AR_One_Sans({
  subsets: ["latin"],
});

export default function Home() {
  const { toggle, setToggle } = useContext(MobileSidebarContext);

  const { width } = useWindowDimension();

  useEffect(() => {
    width > 768 ? setToggle(false) : setToggle(true);
  }, [width]);
  
  return (
    <Container maxW='container.full' className={`${arOneSans.className} w-full h-screen !p-0`}>
      <Head>
        <title>{process.env.PROJECT_NAME}</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <main className="md:pb-24 pb-48">
        <NavBar />
        <HeroSection />
        <AboutMe />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      { !toggle && <MyContacts /> }
      <ScrollUpButton />
      { toggle && <MobileStickyNav /> }
    </Container>
  );
}
