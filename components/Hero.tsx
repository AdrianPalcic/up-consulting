import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section>
      <div className="mt-20 relative bg-[url('/hero.png')] w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-left px-4 w-full px-4 sm:px-12">
            <p className="tag"> VAŠ PARTNER ZA NJEMAČKU</p>
          <h1 className="title">
            Vander Elst Vize {""} <br/>
            <span className="italic text-(--color-accent)">bez komplikacija</span>
          </h1>
          <h2 className="subtitle">
            Preuzimamo kompletan administrativni postupak dok se vi fokusirate na poslovanje. Brže, jednostavnije, bez stresa.
          </h2>
          <div className="flex items-center flex-wrap gap-4 mt-2">
            <a><button className="btn flex items-center gap-3">Započnite proces <ArrowRight /></button></a>
            <a><button className=" px-4 py-2 rounded-[30px] border border-(--color-accent) text-black flex items-center gap-3 cursor-pointer duration-300 transition-colors hover:bg-[#f0f0f0]">Saznajte više </button></a>
          </div>
        </div>

      </div>    
    </section>
  )
}

export default Hero