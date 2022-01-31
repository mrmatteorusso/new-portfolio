import Head from "next/head";
import Meta from "../components/meta";
import Navbar from "../components/Nav/Nabvar";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carolina Cobo - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="og:title"
          property="og:title"
          content="Carolina Cobo's career switcher portfolio to show projecs and articles"
        />
        <meta
          key="og:image"
          property="og:image"
          content="/Users/carolinacobo/Projects/new-portfolio/public/assets/heroImage.svg"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Projects and articles worked on as software engineer and career switcher."
        />
        <meta
          key="description"
          property="description"
          content="Projects and articles worked on as software engineer and career switcher."
        />
        <meta property="og:url" content="https://www.carolinacobo.com/" />
      </Head>

      <Navbar />
      <HeroSection />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
