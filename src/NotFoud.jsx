import React from 'react'
import { Link } from 'react-router-dom'

function NotFoud() {
  return (
    <div>
        <h1>page is not found</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, iusto.</p>
        <p>reurn to <Link to="/"> Home </Link></p>
    </div>
  )
}

export default NotFoud