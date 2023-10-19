 import React from 'react'
import { Outlet } from 'react-router-dom'
   
 function CareerLayout() {
   return (
     <div>
      <h1>Creers list</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, vel. </p>
       <Outlet/>
     </div>
   )
 }
 
 export default CareerLayout