import { ArrowRight } from 'lucide-react'
import React from 'react'

const CTA = () => {
  return (
    <section className='px-4 sm:px-12 mt-20 bg-(--color-sec-bg)'>
        <div className='w-full h-full flex flex-col items-center justify-center py-20'>
            <h1 className="title text-white text-center">Spremni za sljedeći korak?</h1>
            <h2 className="subtitle text-white text-center mb-5">Kontaktirajte nas danas i prepustite nam administrativnu stranu vašeg poslovanja.</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a href='#kontakt'><button className='btn bg-white text-black'>Pošaljite upit <ArrowRight /></button></a>
                <a href="tel:+385915708476" className='text-white'>Ili nas nazovite</a>
            </div>
        </div>
    </section>
  )
}

export default CTA
