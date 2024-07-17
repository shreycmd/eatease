import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center'>

    <div className='flex ml-7 items-center gap-10' >
   <div className='flex items-center'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
 </svg>
 <div
 className='text-3xl flex gap-2'><div className='font-semibold'>EAT</div> <div className='font-extrabold'>EASE</div>
 </div></div>
  
  </div>

  <div className='flex gap-3'>
  <div>delivery</div>
  <div>pickup</div>
  </div> 
  
  <div>
  <div className="flex px-4 py-3 rounded-full border-2 border-blue-500 overflow-hidden  mx-auto font-[sans-serif] w-122">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          className="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type="email" placeholder="Search Foods..." className="w-full outline-none bg-transparent text-gray-600 text-sm" />
    </div>
  </div> 
  <div >
  <div className='flex  text-white bg-slate-950 items-center mr-7 gap-1 border-2 rounded-xl hover:bg-gray-800 hover:cursor-pointer hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 active:bg-gray-900 active:border-gray-900 transition duration-300'>
  <div className='px-2' >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
  </div>
  <div className="px-1 uppercase">
  cart</div>
  </div>
  
  </div>
  </div>
  )
}

export default Header