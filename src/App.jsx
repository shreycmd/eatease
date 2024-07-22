import Header from "./component/Header"
import Nav from "./component/Nav"
import Hero from "./component/Hero"
import Headlinecards from "./component/Headlinecards"
import Foods from "./component/Foods"

import Cat from "./component/Cat"
import { BrowserRouter, Routes } from "react-router-dom"
import Payment from "./component/Payment"
function App() {
  const details=[{name:"Sun's out,BOGO's out",
    rest:"Through 8/26",
    img:"https://images.pexels.com/photos/1603463/pexels-photo-1603463.jpeg?auto=compress&cs=tinysrgb&w=600"
   },{name:"Newly Restaurants",
    rest:"Added daily",
    img:"https://images.pexels.com/photos/10580197/pexels-photo-10580197.jpeg?auto=compress&cs=tinysrgb&w=600"
   },{name:"We deliver Desserts Too",
    rest:"Tasty Treats",
    img:"https://images.pexels.com/photos/5061198/pexels-photo-5061198.jpeg?auto=compress&cs=tinysrgb&w=600"
   }]
  return (
    <>
    <Nav/>
    <Hero/>
    <div className="grid md:grid-cols-3 gap-6">
    {details.map((item,index)=>(<div key={index}>
      <Headlinecards name={item.name} rest={item.rest} img={item.img}/></div>
      
    ))}</div>
    <Foods/>
    <Cat/>
    
    
   
    </>
  )
}

export default App
