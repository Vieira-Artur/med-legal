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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Importance />
        <Program />
        <Professor />
        <Registration />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
