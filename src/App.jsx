import {BrowserRouter,Routes,
  Route,
  NavLink,
createBrowserRouter,
createRoutesFromElements,
RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import  Root from './pages/Root/Root'
import Help from './pages/Help'
import Faq from './pages/Faq'
import Inf,{contactAction} from './pages/Inf'
import NotFoud from './NotFoud'
import CareerLayout from './pages/CareerLayout'
import Career,{careersLoader} from './pages/Career'
import CareerDetail, { CareerDetailLoader } from './pages/CareerDetail'
import Erorrpage from './Erorrpage'
import Timer from './Timer'

const Router = createBrowserRouter(
  createRoutesFromElements(
       <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
       
        <Route path = 'help' element={<Help/>}>
          <Route path='faq' element={<Faq/>} />

          <Route path='info' element={<Inf/>} action={contactAction}/>
          </Route>
          <Route path="careers" element={<CareerLayout/>}>
            <Route 
            index element={<Career/>}
            loader={careersLoader}
            />
            <Route path =':id' 
            loader={CareerDetailLoader}
            element={<CareerDetail/>}
            errorElement={<Erorrpage/>}
            />
          

          </Route>

          <Route path='timer' element={<Timer/>}/>
          <Route path='*' element={<NotFoud/>}/>
       </Route>
      
       
       
  )
);

function App() {
  
  return (
    
    <>

    <RouterProvider router={Router}/>

    </>

  )
}

export default App
