import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


function Career() {  
     const Careers = useLoaderData();
  return (
    <div>
        {Careers.map(Career=>(
           <Link to={Career.id.toString()} key={Career.id}>
            <p>{Career.title}</p>
            <p>{Career.location}</p>
           </Link>
        ))}
    </div>
  )
}

export const careersLoader = async () => {
   const res = await fetch('http://localhost:4000/careers')
    return res.json()
}

export default Career