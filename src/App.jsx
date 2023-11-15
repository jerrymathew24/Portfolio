import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/Services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
   <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
   </>
  )
}


// app.listen(process.env.PORT,()=>{
//   console.log("server is running on 3000");
// })

export default App