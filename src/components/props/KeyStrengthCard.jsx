import React from 'react'
import './card.css'


const KeyStrengthCard = ({title, desc, link}) => {
  return (
    <div className='py-4 md:w-1/3 lg:w-1/4 px-4 sm:px-0'>
      <div className='red-line relative'>
        <div className='text-3xl font-semibold  '>
           {title}
        </div>
        <div className='text-lg text-gray-700 py-4'>{desc}</div>
        <div className='text-xl text-red-600 pb-10'><a href={link}>Learn More <span >&rarr;</span></a></div>
      </div>
    </div>
  )
}

export default KeyStrengthCard
