import React from 'react'

const ImageHoverCard = ({img, title}) => {
  return (
    <div className='relative h-[70vh] lg:h-[80vh] group w-full lg:w-1/4 overflow-hidden my-10 mx-auto'>
        <img src={img} alt="" className='absolute top-0 left-0 h-full w-full group-hover:scale-110 group-hover:opacity-75' />
        <div className='absolute bottom-5 text-3xl text-white px-6 font-semibold'>{title}</div>
    </div>
  )
}

export default ImageHoverCard
