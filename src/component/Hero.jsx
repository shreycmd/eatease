import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className='max-h-[500px] relative'>
    <div className='uppercase absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>the <span className='text-orange-500'>best</span></h1>
    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>foods </span>delivered</h1>
    
    
    
    </div>
    <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" className='w-full max-h-[500px] object-cover' alt='burger'/></div>
    
    </div>
  )
}

export default Hero