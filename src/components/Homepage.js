import React from 'react'
import Hero from './Hero'
import Highlights from './Highlights'
import Testemonials from './Testemonials'
import About from './About'
import Header from './Header'
import Footer from './Footer'

const Homepage = () => {
  return (
    <main>
        <Header />
        <Hero />
        <Highlights />
        <Testemonials />
        <About />
        <Footer />
    </main>
  )
}

export default Homepage