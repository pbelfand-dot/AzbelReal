import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import MortgageCalculator from "@/components/MortgageCalculator";
import Services from "@/components/Services";
import Neighborhoods from "@/components/Neighborhoods";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Listings />
      <MortgageCalculator />
      <Services />
      <Neighborhoods />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
