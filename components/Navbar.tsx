import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='mx-auto px-4 sm:px-12 fixed top-0 z-1000 w-full bg-(--color-bg)'>
      <nav className='mx-auto px-4 sm:px-12 py-4 flex justify-between items-center'>
        
        {/* Logo */}
        <div className="logo w-20 md:w-30 h-auto">
          <img 
            src="/logo.jpeg" 
            alt="UP consulting logo" 
            className='w-full h-full object-cover mix-blend-multiply' 
          />
        </div>

        {/* Linkovi - Skriveni na mobitelu (hidden), vidljivi od md (flex) */}
        <ul className='hidden md:flex items-center gap-8 text-base font-medium'>
          {navLinks.map(({ key, value }) => (
            <li key={value} className='group relative opacity-70 duration-300 transition-opacity hover:opacity-100'>
              <a href={`/${value}`}>{key}</a>
              <span className="absolute left-0 -bottom-1 w-full h-px bg-[--color-accent] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
            </li>
          ))}
        </ul>

        {/* Gumb - Uvijek vidljiv */}
        <a href="/kontakt">
          <button className='btn uppercase text-sm tracking-wider'>
            KONTAKT
          </button>
        </a>
      </nav>
    </header>
  )
}

export default Navbar