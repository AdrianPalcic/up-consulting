import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Kontakt from "@/components/Kontakt";
import Proces from "@/components/Proces";
import Recenzije from "@/components/Recenzije";
import Usluge from "@/components/Usluge";
import WhosItFor from "@/components/WhosItFor";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";

export default function Home() {
  return (
    <main>
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
