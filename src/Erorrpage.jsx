 import React from 'react'
 import { useRouteError } from 'react-router-dom'
 
 function Erorrpage() {
    const error = useRouteError()
   return (
     <div>{error.message} </div>
   )
 }
 
 export default Erorrpage