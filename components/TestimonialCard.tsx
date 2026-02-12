import React from 'react'

const TestimonialCard = ({text, title, location}: {text:string, title:string, location:string}) => {
  return (
    <div className="min-w-full md:max-w-md min-h-[300px]  border border-gray-200 rounded-sm p-8 shadow-sm flex flex-col justify-center items-center">
      {/* Citat */}
      <blockquote className="font-playfair text-xl leading-snug text-black mb-8 text-center">
        "{text}"
      </blockquote>

      {/* Tanka linija (Separator) */}
      <div className="w-full h-px bg-gray-200 mb-6"></div>

      {/* Potpis */}
      <div className="flex flex-col self-center justify-end">
        <p className="font-inter text-gray-500 text-sm mt-1">
          {title}, <span className='font-medium text-black'>{location}</span>
        </p>
        <p className='font-inter text-gray-500 text-sm mt-1'>
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard