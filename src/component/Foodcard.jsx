import React from 'react'

function Foodcard({name,img,price}) {
  return (
    
    <div className='bg-white  max-h-[300px]   rounded-xl border-1  shadow-gray-600 shadow-lg' onClick={()=>{alert("add to cart?")}}>
    <img src={img} className='h-[200px] w-full object-cover rounded-xl'/>
    <div className='flex justify-between px-2 py-2 flex-wrap'> <div className='text-gray-600 font-bold'>{name}</div>
    <span className='bg-orange-600 text-white rounded-xl px-2'>{price}</span></div>
    </div>
    
  )
}

export default Foodcard