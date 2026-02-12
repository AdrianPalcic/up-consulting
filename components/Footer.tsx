import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='px-4 sm:px-12 mt-20 w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center pb-8 gap-6 md:gap-0'>
        
        <div className='flex self-start'>
          <img 
            src="/logo.jpeg" 
            alt="Administrativna podrška za Vander Elst vize" 
            className='h-12 w-auto mix-blend-multiply' 
          />

        </div>

        <div className='flex flex-wrap gap-8 text-gray-700 font-medium'>
          <a href="/uvjeti-koristenja" className='hover:text-(--color-accent) transition-colors'>
            Uvjeti korištenja
          </a>
          <a href="/politika-privatnosti" className='hover:text-(--color-accent) transition-colors'>
            Politika privatnosti
          </a>
        </div>
      </div>

      <div className='border-t border-gray-200 py-6'>
        <p className='text-center text-sm text-gray-500'>
          {currentYear} © UP Consulting, sva prava zadržana
        </p>
      </div>
    </footer>
  )
}

export default Footer