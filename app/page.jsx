import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Reserve from "@/components/Reserve";
import Story from "@/components/Story";
import WhatsFloat from "@/components/WhatsFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <MenuSection />
        <Gallery />
        <Reserve />
      </main>
      <Footer />
      <WhatsFloat />
    </>
  );
}
