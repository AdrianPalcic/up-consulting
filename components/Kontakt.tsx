import React from 'react'
import { ArrowRight } from 'lucide-react'

// Pomoćna komponenta za Input polja s "Floating" efektom
const FloatingInput = ({ label, type = "text", id, name }: { label: string, type?: string, id: string, name: string }) => (
  <div className="relative z-0 w-full group">
    <input 
      type={type} 
      name={name} 
      id={id} 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--color-accent] peer" 
      placeholder=" " 
      required 
    />
    <label 
      htmlFor={id} 
      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[--color-accent] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider"
    >
      {label}
    </label>
  </div>
);

const Kontakt = () => {
  return (
    <section id="kontakt" className='px-4 sm:px-12 mt-20'>
        <div className='flex flex-col lg:flex-row w-full gap-12 lg:gap-24'>
            <div className='flex-1'>
                <p className='tag mb-4 text-[--color-accent] font-bold uppercase tracking-widest'>KONTAKT</p>
                <h1 className="secondary-tit text-4xl font-bold mb-4">Razgovarajmo o vašem postupku</h1>
                <h2 className='subtitle mb-6 font-medium text-gray-600'>Za osnovne informacije i provjeru mogućnosti suradnje slobodno nas kontaktirajte. Po potrebi je moguće dogovoriti poslovni sastanak putem video poziva, telefonski ili osobno.</h2>
                
                <div className='flex flex-col gap-6 mt-8'>
                    <div className='border-l-2 px-4 border-[--color-accent] flex flex-col gap-1'>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Telefon</p>
                        <a href='tel:+385915708476' className="font-medium hover:text-[--color-accent] transition-all">+385 91 5708 476</a>
                    </div>
                    <div className='border-l-2 px-4 border-[--color-accent] flex flex-col gap-1'>
                        <p className='text-xs text-gray-500 uppercase tracking-wide'>Email</p>
                        <a href="mailto:info@up-consulting.hr" className="font-medium hover:text-[--color-accent] transition-all">info@up-consulting.hr</a>
                    </div>
                    <div className='flex flex-col gap-1 mt-2'>
                        <p className='text-sm text-gray-500'>Vrijeme odgovora: <span className="text-black font-medium">Unutar 24h</span></p>
                    </div>
                </div>
            </div>

            {/* DESNA STRANA - KONTAKT FORMA */}
            <div className='flex-1 mt-8 lg:mt-0'>
                <h3 className="font-playfair text-3xl md:text-4xl mb-10 italic">Pošaljite nam poruku</h3>
                
                <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-8">
                    
                    {/* --- WEB3FORMS KONFIGURACIJA --- */}
                    <input type="hidden" name="access_key" value="1364eb90-2efe-4367-aa1c-d1b1e3877480" />
                    
                    {/* REDIRECT NA HVALA STRANICU */}
                    <input type="hidden" name="redirect" value="https://up-consulting.hr/hvala" />
                    
                    <input type="hidden" name="subject" value="Novi upit s web stranice" />
                    <input type="hidden" name="from_name" value="UP Consulting Kontakt" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FloatingInput id="ime" name="Ime i prezime" label="Puno ime" />
                        <FloatingInput id="firma" name="Tvrtka" label="Ime firme" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FloatingInput id="email" name="Email" type="email" label="E-mail" />
                        <FloatingInput id="telefon" name="Telefon" type="tel" label="Telefon" />
                    </div>

                    <div className="relative z-0 w-full group mt-4">
                        <textarea 
                            name="Poruka" 
                            id="upit" 
                            rows={3} 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[--color-accent] peer resize-none" 
                            placeholder=" " 
                            required 
                        ></textarea>
                        <label 
                            htmlFor="upit" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[--color-accent] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 uppercase tracking-wider"
                        >
                            Vaš upit
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="gdpr" required className="w-4 h-4 cursor-pointer accent-[--color-accent]" />
                        <label htmlFor="gdpr" className="text-xs text-gray-600 cursor-pointer">
                            Pritiskom na gumb slažem se da UP Consulting obrađuje moje podatke u svrhu odgovora na upit.
                        </label>
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="btn flex items-center justify-center gap-2 px-8 py-3 bg-black text-white hover:bg-[--color-accent] transition-all uppercase text-sm tracking-widest font-medium">
                            Pošaljite upit <ArrowRight size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Kontakt