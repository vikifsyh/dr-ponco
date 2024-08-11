import About from "@/components/layouts/About/About";
import Footer from "@/components/layouts/Footer/Footer";
import Goals from "@/components/layouts/Goals/Goals";
import Hero from "@/components/layouts/Hero/Hero";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Plan from "@/components/layouts/Plan/Plan";
import Target from "@/components/layouts/Target/Target";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />;
      <About />
      <Goals />
      <Plan />
      <Target />
      <Footer />
    </>
  );
}
