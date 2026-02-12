import React from 'react'
import { navLinks } from '../constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='mx-auto px-4 sm:px-12 fixed top-0 z-1000 w-full bg-(--color-bg)'>
      <nav className='mx-auto px-4 sm:px-12 py-4 flex justify-between items-center'>
        
        {/* Logo */}
        <a href='/' className="logo w-20 md:w-25 h-auto">
          <Image 
          src="/logo.jpeg"
           alt="Pomoć pri dobivanju Vander Elst Vize"
           width={140} // Lighthouse dimenzije
          height={110}
          className="h-12 w-auto mix-blend-multiply"
/>
        </a>

        {/* Linkovi - Skriveni na mobitelu (hidden), vidljivi od md (flex) */}
        <ul className='hidden md:flex items-center gap-8 text-base font-medium'>
          {navLinks.map(({ key, value }) => (
            <li key={value} className='group relative opacity-70 duration-300 transition-all hover:opacity-100 hover:text-(--color-accent)'>
              <a href={`#${value}`}>{key}</a>
            </li>
          ))}
        </ul>

        {/* Gumb - Uvijek vidljiv */}
        <a href="#kontakt">
          <button className='btn uppercase text-sm tracking-wider'>
            KONTAKT
          </button>
        </a>
      </nav>
    </header>
  )
}

export default Navbar