import React from 'react'
import { useLoaderData } from 'react-router-dom'

function CareerDetail() {
     const career = useLoaderData()
  return (
    <>
   
    <div>
    <p>career detail {career.title}</p>
    <p>salary {career.salary}</p>
    <p>location of career {career.location}</p>
    <h1 className=' text-yellow-500 border-b-1 border-solid border-red-800 text-xl'>detail of carrer</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi animi incidunt voluptates debitis rem impedit ea, repellat sapiente iure, placeat ab reiciendis nesciunt expedita error. Ea alias voluptate enim.</p>
    </div>
    </>
  )
}
 export const CareerDetailLoader = async ({params})=>{
    const {id} = params
    const res = await fetch('http://localhost:4000/careers/'+id)
      if(!res.ok){
        throw Error("couldn't find the career ");    
      }
           
    return res.json()



}
export default CareerDetail