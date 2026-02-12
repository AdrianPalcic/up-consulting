import React from 'react'

const Proces = () => {
    const proces = [
        {
            id: "01",
            title: "Priprema dokumentacije",
            text: "Pripremamo i temeljito provjeravamo svu potrebnu dokumentaciju, osiguravajući usklađenost s važećim propisima i smanjujući rizik od zastoja ili odbijanja."
        },
        {
            id: "02",
            title: "Organizacija i koordinacija postupka",
            text: "Vodimo i koordiniramo cijeli postupak između svih uključenih strana, osiguravajući jasno definirane korake i pravovremenu provedbu svake faze."
        },
        {
            id: "03",
            title: "Praćenje dostupnosti termina",
            text: "Kontinuirano pratimo dostupnost termina i pravodobno reagiramo kako bismo ubrzali postupak i izbjegli nepotrebna čekanja."
        },
        {
            id: "04",
            title: "Komunikacija uz tijek postupka",
            text: "Aktivno komuniciramo tijekom cijelog postupka i pravovremeno reagiramo na sve zahtjeve kako bi se izbjegle greške i kašnjenja."
        },
        {
            id: "05",
            title: "Podrška poslodavcima tijekom cijelog procesa",
            text: "Pružamo kontinuiranu podršku i individualan pristup svakom slučaju, preuzimajući organizacijski teret kako biste se vi mogli nesmetano fokusirati na svoje poslovanje."
        },
    ]

    return (
        <section id="proces" className='px-4 sm:px-12 mt-16 bg-(--color-sec-bg) py-20 text-white'>
            <p className="tag opacity-70 mb-4">Naš proces</p>
            <h1 className="secondary-tit text-3xl md:text-5xl mb-12">Od prve dokumentacije do završetka postupka</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-15'>
                {proces.map(p => (
                    <div key={p.id} className="border-t border-white/10 pt-6">
                        <span className="font-playfair text-5xl ">{p.id}</span>
                        <h3 className="text-xl font-semibold my-3">{p.title}</h3>
                        <p className="text-white/60 leading-relaxed">{p.text}</p>
                    </div>
                ))}

                {/* Zadnji child - Šesta kartica u gridu */}
                <div className="flex items-center justify-center border-t border-white/10 pt-6">
                    <h2 className="font-playfair text-3xl md:text-4xl text-center leading-tight">
                        Jednostavno i učinkovito
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Proces