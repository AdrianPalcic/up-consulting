"use client"; 
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'

const AccordionItem = ({ title, content }: { title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left"
      >
        <span className="font-medium text-lg text-black">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-black/70 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

const Usluge = () => {
const faqData = [
    {
      title: "Tko točno treba Vander Elst vizu?",
      content: "Vander Elst viza obvezna je za državljane trećih zemalja koje hrvatski poslodavci (tvrtke i obrti) privremeno upućuju na rad u Njemačku. Iako radnici imaju važeće dozvole u Hrvatskoj, ovaj administrativni postupak je ključan za legalan rad na njemačkom tržištu."
    },
    {
      title: "Koje države i tvrtke pokrivate svojom uslugom?",
      content: "Usluga je namijenjena hrvatskim poslodavcima koji upućuju radnike na privremeni rad u Njemačku. Pružamo podršku klijentima koji žele pouzdanu administrativnu obradu bez nepotrebnih zastoja, osiguravajući da je svaki slučaj obrađen individualno i u skladu s propisima."
    },
    {
      title: "Možete li nam osigurati termin u veleposlanstvu?",
      content: "Naša uloga uključuje stalno praćenje dostupnosti termina i organizaciju postupka. Zbog ograničene dostupnosti termina, preuzimamo taj teret na sebe kako bismo maksimalno smanjili mogućnost kašnjenja uzrokovanih administrativnim greškama."
    },
    {
      title: "Što ako nismo sigurni je li naša dokumentacija ispravna?",
      content: "Nudimo kompletnu administrativnu pripremu i provjeru dokumentacije. Naše iskustvo u radu s Vander Elst postupcima omogućuje nam da uočimo potencijalne nedostatke prije predaje, vodeći proces organizirano i transparentno."
    },
    {
      title: "Kako možemo započeti suradnju?",
      content: "Najbrži način je izravan telefonski poziv ili e-mail. Nakon osnovnih informacija i provjere mogućnosti suradnje, možemo dogovoriti detaljniji poslovni sastanak putem video poziva, telefonski ili osobno u našem uredu."
    }
  ];

  return (
    <section id="usluge" className='px-4 sm:px-12 mt-20'>
        <div className='flex flex-col lg:flex-row w-full gap-1  gap-1 lg:gap-16'>
            {/* Lijeva strana */}
            <div className='flex-1'>
                <p className='tag mb-4'>O USLUZI</p>
                <h1 className="secondary-tit ">Što je Vander Elst viza i kako vam mi možemo pomoći?</h1>
                <h2 className='subtitle mb-6  font-regular'>Vander Elst viza obvezna je za državljane trećih zemalja koje hrvatski poslodavci privremeno upućuju na rad u Njemačku.</h2>
                <div className="space-y-4">
                  <p className='text-black/80'>Iako radnici imaju važeće radne dozvole u Hrvatskoj, za legalan rad na njemačkom tržištu moraju proći ovaj poseban administrativni postupak.</p>
                  <p className='text-black/80'>Sam proces uključuje niz koraka – od prikupljanja točne dokumentacije do neprestanog praćenja dostupnosti termina u veleposlanstvu.</p>
                    <a href="#kontakt"><button className="btn ">Osigurajte termin <ArrowRight /></button></a>    
                </div>
            
            </div>

            {/* Vertikalni separator (Dizajnerska linija) */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

            {/* Desna strana - Accordion */}
            <div className='flex-1 mt-24'>
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-black/40 mb-6">Česta Pitanja</h3>
                  {faqData.map((item, index) => (
                    <AccordionItem key={index} title={item.title} content={item.content} />
                  ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Usluge