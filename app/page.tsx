import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Dishes />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}