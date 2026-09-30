import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <RevealObserver />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Dishes />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}