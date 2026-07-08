import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Worlds from "@/components/Worlds";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1201A4] text-white">
      <Navigation />
      <Hero />
      <Worlds />
      <Footer />
    </main>
  );
}