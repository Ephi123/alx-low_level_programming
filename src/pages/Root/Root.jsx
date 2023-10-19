import {NavLink, Outlet} from 'react-router-dom'
import Breadcrumbs from '../../component/Breadcrumbs'

function Root() {
  return (
    <div className='m-2 text-white'>
      <header className='flex justify-between '>
    <h1 className='border-b-2 file:border-solid border-red-500 ml-2 self-end' >Logo</h1>
      <nav className='flex flex- gap-3 justify-end text-white mr-3 mt-2 '>
        <NavLink className=" extra text-blue-500 p-1" to='/'>HOME</NavLink>
       <NavLink to='about'>ABOUT</NavLink>
       <NavLink to='help'>Help</NavLink>
       <NavLink to='careers'>Careers</NavLink>
      </nav>
        <Breadcrumbs/>
      </header> 
       
     <main>
        <Outlet/>
     </main>
    </div>
  )
}

export default Root 
