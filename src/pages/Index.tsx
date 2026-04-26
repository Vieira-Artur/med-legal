import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/Highlights";
import { About } from "@/components/landing/About";
import { Importance } from "@/components/landing/Importance";
import { Program } from "@/components/landing/Program";
import { Professor } from "@/components/landing/Professor";
import { Registration } from "@/components/landing/Registration";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { BackToTopButton } from "@/components/landing/BackToTopButton";
import { Reveal } from "@/components/landing/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Reveal><Highlights /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Importance /></Reveal>
        <Reveal><Program /></Reveal>
        <Reveal><Professor /></Reveal>
        <Reveal><Registration /></Reveal>
        <Reveal><Location /></Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default Index;
