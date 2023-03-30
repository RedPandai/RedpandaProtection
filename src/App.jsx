import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Donation from './components/pages/Donation'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import GetInvolvedPage from './components/pages/GetInvolvedPage'
import Homepage from './components/pages/Homepage'
import DonationDetail from './components/DonationDetail'

function App() {

  return (
    <div className="h-screen bg-Hero bg-cover md:bg-top bg-center overflow-auto min-h-screen w-full flex flex-col">
      <Navbar/>
      <main className='flex-1 flex'>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/getinvolved' element={<GetInvolvedPage/>}></Route>
          <Route path='/research' element={<GetInvolvedPage/>}></Route>
          <Route path='/contact' element={<GetInvolvedPage/>}></Route>
          <Route path='/donation' element={<Donation />}></Route>
          <Route path='/donation/:id' element={<DonationDetail />}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
