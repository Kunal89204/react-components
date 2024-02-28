import React from 'react'
import ImageHoverCard from './props/ImageHoverCard'


const ImageHover = () => {
  return (
    <div>
        <h1 className='text-5xl font-semibold text-center py-10'> Industries</h1>
        <div className='lg:flex lg:justify-center '>
        <ImageHoverCard 
        img='https://www.cukeragency.com/prodcuker/media/ctas/Sports-Equipment-Apparel_About-Us.png'
        title='Sports Equipment and Apparel'
        />
        <ImageHoverCard 
        img='https://www.cukeragency.com/prodcuker/media/ctas/Sports-Equipment-Apparel_About-Us.png'
        title='Sports Equipment and Apparel'
        />
        <ImageHoverCard 
        img='https://www.cukeragency.com/prodcuker/media/ctas/Sports-Equipment-Apparel_About-Us.png'
        title='Sports Equipment and Apparel'
        />

        
    </div>


    <div className='pl-40 py-10'><button className=' py-2 px-6 bg-blue-300'>View More</button></div>



    </div>
  )
}

export default ImageHover
