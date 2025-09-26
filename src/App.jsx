import React from 'react'
import Header from './components/header'
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8 min-h-screen'>
        <Header />
        <Hero />
      </div>
    </>
  )
}

export default App