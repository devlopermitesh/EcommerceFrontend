import { Outlet } from 'react-router-dom'
import './App.css'
import AdHeading from './components/AdHeading'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Toaster } from './components/ui/sonner'
function App() {

  return (

    <div className='flex flex-col absolute inset-0 h-screen w-full  min-h-screen  '>
      {/* headShow */}
      <AdHeading Heading='Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!' link={'/specialoffer'}/>
      {/* Navbar  */}
      <Navbar/>
  <main className="flex-1">
<Outlet/>
  </main>
<Toaster richColors/>
<Footer/>
    </div>

  )
}

export default App
