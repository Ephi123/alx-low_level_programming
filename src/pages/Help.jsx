import {NavLink,Outlet} from 'react-router-dom'

function Help() {
  return (
    <div>
<h1 className='text-red-500 my-4 font-extrabold text-3xl'>Help</h1>
<div>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tenetur explicabo quibusdam inventore vel, ea tempore sit! Dolore, voluptatum tempora.
    </p>
</div>
<nav className='flex gap-10 justify-center mt-6'>
    <NavLink className=" active:bg-orange-400 " to='faq'>FAQ</NavLink>
    <NavLink to='info'>INFO</NavLink>
    
</nav>
<main>
    <Outlet/>
</main>


    </div>
  )
}

export default Help