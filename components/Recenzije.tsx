import React from 'react'
import TestimonialCard from './TestimonialCard'

const Recenzije = () => {
    const recenzije = [
        {
            text: "Imali smo 8 radnika koji su trebali Vander Elst vizu. UP Consulting je preuzeo cijeli proces i svi su dobili vize u roku. Bez stresa i čekanja.",
            title: "Direktor, građevinska tvrtka",
            location: "Čakovec"
        },
        {
            text: "Postupak Vander Elst vize nam je znao oduzimati puno vremena. Uz UP Consulting cijeli proces je bio jasan, organiziran i bez nepotrebnih komplikacija.",
            title: "Voditelj projekta, elektroinstalacijski radovi",
            location: "Zagreb"
        },
        {
            text: "Cijenimo jasnu komunikaciju i pravovremene informacije kroz cijeli postupak. Radnici su dobili vize u dogovorenim rokovima, bez dodatnih zahtjeva.",
            title: "Direktor, montaža metalnih konstrukcija",
            location: "Varaždin"
        },
    ]

    return (
        <section className='px-4 sm:px-12 mt-32'>
            <div>
                <p className='tag mb-4'>Reference</p>
                <h1 className="secondary-tit max-w-3xl">Riječi naših klijenata govore više od svega</h1>

                {/* Responzivni Grid: 1 kolona mobitel, 2 kolone tablet, 3 kolone desktop */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                    {recenzije.map((r, index) => (
                        <div key={index} className="h-full">
                            <TestimonialCard 
                                text={r.text} 
                                title={r.title} 
                                location={r.location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recenzije