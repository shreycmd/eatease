import React, { useContext, useState } from 'react'
import { data } from '../data/Data'
import Foodcard from './Foodcard'
import { carti } from '../Context';

function Foods() {
  const[food,setfood]=useState(data);
  const filterType=(category)=>{
    setfood(data.filter((item)=>{
      return item.category===category;
    }))
  }
  const filterPrice=(ulprice,loprice)=>{
    setfood(data.filter((item)=>{
      return (loprice<item.price)&&(item.price<ulprice)
    }))
  }
 const {cartitems,setcartitems} =useContext(carti)  
  
  
  
  const addtoarray=(newitem)=>{
    setcartitems((prev)=>{
      const exist=prev.findIndex((ne)=>{ return ne.name==newitem.name})
      if(exist===-1){
     
       return [...prev,{...newitem,quant:1}]
       
      }else{
        const updatedform=[...prev];
       updatedform[exist].quant+=1;
        
        return updatedform
      }
    })
  }
    
  
  console.log(cartitems)
  return (
    
    <div className='max-w-[1640px] mx-auto p-4'>
    <div className=' text-4xl text-center text-orange-600 font-bold'>
    <p >Top Rated Menu Items</p></div>
    {/*filter row */}
    <div className='flex flex-col lg:flex-row justify-between mt-4'>
    {/*filter type */}
    <div className=''>
    <p className='font-bold text-gray-700 '>Filter Type</p>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => setfood(data)}>All</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ' onClick={() => filterType('pizza')}>Pizza</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType('burger')}>Burger</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType('chicken')}>Chicken</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => filterType('salad')}>Salad</button>
    </div>
    {/*filter price */}
    <div>
    <p className='font-bold text-gray-700'>Filter Price</p>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=> filterPrice("₹200","₹0")}>Below ₹200</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=> filterPrice("₹300","₹200")}>₹300-₹200</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={()=> filterPrice("₹400","₹300")}>₹400-₹300</button>
    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'  onClick={()=> filterPrice("₹500","₹400")}>₹500-₹400</button>
    </div>
    
    </div>
    <div className=' grid grid-cols-2  lg:grid-cols-4 gap-6 pt-10 m-4'>
    {food.map((item,index)=>(<div  className="hover:scale-110 duration-200 hover:cursor-pointer" key={index} >
      <Foodcard name={item.name} img={item.image} price={item.price} onClick={()=>(addtoarray(item))}/>
      </div>

    ))}
    </div></div>
  )
}

export default Foods