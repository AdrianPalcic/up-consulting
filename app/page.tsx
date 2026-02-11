import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Kontakt from "@/components/Kontakt";
import Navbar from "@/components/Navbar";
import Proces from "@/components/Proces";
import Recenzije from "@/components/Recenzije";
import Usluge from "@/components/Usluge";
import WhosItFor from "@/components/WhosItFor";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Usluge />
      <Proces />
      <WhyWorkWithUs />
      <WhosItFor />
      <Recenzije />
      <CTA/>
      <Kontakt />
    </main>
  );
}
