import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import CTASection from "@/components/sections/cta-section";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>John Doe | Web Developer & Designer</title>
        <meta name="description" content="Professional web developer specializing in creating beautiful, functional websites and web applications." />
        <meta name="keywords" content="web developer, web designer, frontend, backend, react, responsive design" />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CTASection variant="primary" />
        <About />
        <Testimonials />
        <CTASection variant="tertiary" />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
