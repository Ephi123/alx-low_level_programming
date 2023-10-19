  import React from 'react'
import { Link, useLocation } from 'react-router-dom'
  
  function Breadcrumps() {
    const location = useLocation();
    let currentLink = ''
    const crumb = location.pathname.split("/")
    .filter(crumb => crumb !== "")
    .map(crumb =>{

      currentLink =+ `/${crumb}`
       return(
        <div key={crumb}>
        <Link to={currentLink}>{crumb}</Link>
        </div>
       )

    })

    return (
      <div>
        {crumb}
      </div>
    )
  }
  
  export default Breadcrumps