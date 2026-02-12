import { ArrowRight } from 'lucide-react'
import React from 'react'

const WhosItFor = () => {

const industrije = [
  "Građevinski i montažni radovi",
  "Montaža i ugradnja metalnih konstrukcija",
  "Elektroinstalacijski radovi",
  "Strojarske instalacije i bravarski radovi",
  "Industrijska montaža i održavanje",
  "Zavarivački i drugi specijalizirani radovi"
];
  return (
   <section className=' mt-20'>
        <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-1 md:gap-16'>
            {/* Lijeva strana */}
            <div className='flex-1 px-4 sm:px-12'>
                <p className='tag mb-4'>Kome je namijenjeno</p>
                <h1 className="secondary-tit ">Za poslodavce koji trebaju pouzdanu administrativnu podršku pri upućivanju radnika u Njemačku</h1>
                <h2 className='subtitle mb-6 mt-4  font-medium'>Radimo s hrvatskim tvrtkama i obrtima svih veličina koji upućuju radnike na privremeni rad u Njemačku. Od malih obrta do velikih korporacija — pristup je uvijek jednak: profesionalan i human.</h2>
                <p className='text-sm'>Industrije koje pokrivamo:</p>
                <div className="flex flex-wrap max-w-2xl gap-4 mb-4 mt-2">
                    {industrije.map((i, index) => (
                        <div key={index} className='py-1 flex gap-16 px-2 text-sm bg-[#E4E4E4] rounded-full'>{i}</div>
                    ))}
                </div>
                <div className="space-y-4">
                    <a href="#kontakt"><button className="btn ">Zatražite procjenu <ArrowRight /></button></a>    
                </div>
            </div>


            <div className='self-center lg:self-end mt-24'>
                <div className='w-full h-auto  sm:h-[760px] sm:w-[572px]'>
                    <img src="/who.png" alt="" className='w-full h-full object-cover max-h-[600px]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhosItFor