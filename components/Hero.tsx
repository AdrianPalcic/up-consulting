import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-20  w-full">
      <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Next.js Image komponenta optimizirana za Lighthouse */}
        <Image
          src="/hero.webp"
          alt="Administrativna podrška za Vander Elst vize i poslovno savjetovanje"
          fill
          fetchPriority="high"
          className="object-cover w-full h-full"
          sizes="100vw"
          quality={90}
        />
        
        {/* Overlay - postavljen preko slike, a ispod teksta */}
        <div className="absolute inset-0 bg-black/10 z-10"></div>

        {/* Sadržaj - postavljen iznad overlay-a */}
        <div className="relative z-20 text-left w-full px-6 sm:px-12">
          <p className="tag text-black"> VAŠ PARTNER ZA NJEMAČKU</p>
          <h1 className="title text-black">
            Vander Elst Vize {""} <br/>
            <span className="italic text-(--color-accent)">bez komplikacija</span>
          </h1>
          <h2 className="subtitle text-black/90">
            Preuzimamo kompletan administrativni postupak dok se vi fokusirate na poslovanje. Brže, jednostavnije, bez stresa.
          </h2>
          <div className="flex items-center flex-wrap gap-4 mt-6">
            <a href="#kontakt">
              <button className="btn flex items-center gap-3">
                Započnite proces <ArrowRight />
              </button>
            </a>
            <a href="#usluge">
              <button className="px-6 py-2.5 rounded-[30px] border border-(--color-accent) bg-white/10 backdrop-blur-sm text-black flex items-center gap-3 cursor-pointer duration-300 transition-colors hover:bg-white/20">
                Saznajte više
              </button>
            </a>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default Hero;