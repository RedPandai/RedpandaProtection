import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import GetInvolvedPage from './components/pages/GetInvolvedPage'
import Homepage from './components/pages/Homepage'

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
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
