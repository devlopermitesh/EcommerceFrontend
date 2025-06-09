import { Outlet } from 'react-router-dom'
import './App.css'
import AdHeading from './components/AdHeading'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (

    <div className='flex flex-col absolute inset-0 h-screen w-full'>
      {/* headShow */}
      <AdHeading Heading='Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!' link={'/specialoffer'}/>
      {/* Navbar  */}
      <Navbar/>
<Outlet/>
<Footer/>
    </div>

  )
}

export default App
