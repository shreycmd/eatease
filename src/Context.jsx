import React, { createContext, useState } from 'react'
export const carti=createContext()
function Context({children}) {
  const[cartitems,setcartitems]=useState([])
  return (
    <carti.Provider value={{cartitems,setcartitems}}>
    {children}</carti.Provider>
  )
}

export default Context