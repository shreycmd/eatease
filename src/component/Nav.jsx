import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import { BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
function Nav() {
    const[res,setres]=useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/*left side*/}<div className='flex items-center'>
    <div className='flex items-center'>
    <div  onClick={()=>setres(!res)}className='cursor-pointer'><AiOutlineMenu size={35}/></div>
    <h1 className='text-2xl sm:text-3xl md:text-4xl px-2'>EAT<span className='font-extrabold'>EASE</span></h1></div>
<div className=' uppercase hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
<p className='bg-black text-white rounded-full p-2'>delivery</p>
<p className='p-2'>pickup</p>
</div>
</div>
{/*search box*/}

<div className=" bg-gray-200 flex px-4 py-3 rounded-full border-2 border-black overflow-hidden  mx-auto font-[sans-serif] w-[200px] sm:w-[400px] lg:w-[700px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          className="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="email" placeholder="Search Foods..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
    </div>
{/*cart button*/}
<div className=' hidden   bg-black text-white rounded-full p-2  md:flex items-center '>
<AiOutlineShoppingCart size={25}/>
<p className='uppercase text-md'>cart</p>
</div>
{/*mobile menu*/}
{res?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'>
</div>:null}


<div className={res?'fixed bg-white z-10 top-0 left-0 w-[300px] h-screen transition-all ease-in-out duration-500':'fixed bg-white z-10 top-0 left-[-100%] w-[300px] h-screen transition-all ease-in-out duration-500'}>
<AiOutlineClose onClick={()=>(setres(!res))}size={30} className='top-4 right-4 absolute'/>
<h2 className='uppercase text-2xl p-4'>best <span className='font-extrabold'>eats</span>
</h2>
<nav>
<ul className='flex flex-col p-4 text-gray-800'>
<li className='text-xl py-4 flex items-center hover:underline'><TbTruckDelivery size={25} className='mr-4 '/>Orders</li>


<li className='text-xl py-4 flex hover:underline duration-300'><MdFavorite size={25} className='mr-4 ' /> Favorites</li>
                <li className='text-xl py-4 flex hover:underline duration-300'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex hover:underline duration-300'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex hover:underline duration-300'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex hover:underline duration-300'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex hover:underline duration-300'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
</ul></nav>
</div>
    </div>
  )
}

export default Nav