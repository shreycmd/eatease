import React from 'react'

function Headlinecards({name,rest,img}) {
    
  return (
    <div className='max-w-[1640px] mx-auto p-4  py-12 '>
    <div className='relative rounded-xl '>
    <div className='absolute w-full h-full  bg-black/40 text-gray-200 rounded-xl'>
    <p className='font-bold text-2xl px-2 pt-4'>{name}</p>
    <p className='px-4'>{rest}</p>
    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-gray-700 hover:text-white'> order now</button>
    </div>
    <img src={img} className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' alt='img'/>
    </div></div>
  )
}

export default Headlinecards