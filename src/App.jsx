import { useState } from 'react'
import ReactDom from 'react-dom/client'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact   from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout />}>
  //       <Route path='' element={<Home />} />
  //       <Route path='skills' element={<Skills />} />
  //       <Route path='projects' element={<Projects/>} />
  //       <Route path='contact' element={<Contact />} />
  //     </Route>
  //   ));
  return (
    <>
       <div className=' w-max-100 h-min-100   bg-gradient-to-b from-black via-black to-gray-800  '>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
