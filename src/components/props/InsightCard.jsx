import React from 'react'

const InsightCard = ({img, title, desc}) => {
  return (
    <div className='lg:pt-40 pt-20'>
      <div className='w-full'><img src={img} alt="" /></div>
      <div className='text-4xl font-semibold pb-4 pt-16'>{title}</div>
      <div className='text-base py-2 text-gray-500'>{desc}</div>
    </div>
  )
}

export default InsightCard
