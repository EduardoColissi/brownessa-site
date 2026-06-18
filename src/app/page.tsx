import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Produtos } from "@/components/sections/Produtos";
import { Galeria } from "@/components/sections/Galeria";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { Encomendar } from "@/components/sections/Encomendar";
import { Contato } from "@/components/sections/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Produtos />
        <Galeria />
        <Depoimentos />
        <Encomendar />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
