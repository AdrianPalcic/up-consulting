import { ArrowRight } from 'lucide-react'
import React from 'react'

const WhyWorkWithUs = () => {

    const data = [
        {
            title: "Bez termina - bez posla",
            text:"Termini u veleposlanstvu su izuzetno ograničeni. Naš tim kontinuirano prati sustav i reagira u sekundi kada se pojavi prilika.",
        },
        {
            title: "Jedna greška = mjeseci čekanja",
            text:"Postupak zahtijeva precizno pripremljenu dokumentaciju. Svaka nepravilnost može vratiti cijeli proces na početak.",
        },
        {
            title: "Vaše vrijeme je vrijedno",
            text:"Dok vi vodite poslovanje, mi vodimo administraciju. Bez stresa, bez brige, bez gubitka fokusa.",
        },
    ]

  return (
     <section className='px-4 sm:px-12 mt-20 pb-2'>
        <div className='flex flex-col md:flex-row w-full gap-8 md:gap-24'>
            {/* Lijeva strana */}
            <div className='flex-1'>
                <p className='tag mb-4'>ZAŠTO SURAĐIVATI S NAMA</p>
                <h1 className="secondary-tit ">Fokusirajte se na ono što znate najbolje</h1>
                <h2 className='subtitle mb-6  font-medium'>Dok vi gradite projekte i vodite tim, mi osiguravamo da vaši radnici legalno i na vrijeme stignu na odredište. To je naša ekspertiza.</h2>
                <div className="space-y-4">

                    <a><button className="btn ">Osigurajte termin <ArrowRight /></button></a>    
                </div>
            
            </div>



            {/* Desna strana  */}
            <div className='flex-1 '>
                <div className='flex flex-col gap-8'>
                {data.map(d => (
                    <div className='border-l-2 border-(--color-accent) pl-3 '  key={d.text}>
                        <h3 className='font-medium text-lg font-inter'>{d.title}</h3>
                        <p className='font-inter max-w-lg'>{d.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyWorkWithUs
