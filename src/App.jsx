import React from 'react'
import Header from './components/header'
import Hero from './components/Hero';
import Flagships from './components/Flagships';
import Benefits from './components/Benefits';
import Login from './components/login';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8 min-h-screen'>
        <Header />
        <Hero />
        <Flagships />
        <Benefits />
        {/* <Login /> */}
      </div>
    </>
  )
}

export default App