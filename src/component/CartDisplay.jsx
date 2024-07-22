import React, { useContext, useEffect, useState } from 'react'
import { carti } from '../Context'
import { IoAddOutline } from "react-icons/io5";
import { FaLine, FaMinus } from 'react-icons/fa';

function CartDisplay({name ,price,index,quantity,perform}) {
    const {cartitems,setcartitems}=useContext(carti)
    
    
  
    

  return (
    <>
    <span>{index}</span>
    <span className='text-xs '>{name}</span>
    
    <div className='flex justify-evenly items-center text-center '><button className='px-1 py-1 ' onClick={()=>perform(1,index-1)} ><IoAddOutline/></button>{quantity}<button className='px-1 py-1' onClick={()=>perform(0,index-1)}><FaMinus/></button></div>
    <span>₹{price *quantity}</span>
    </>
  )
}

export default CartDisplay