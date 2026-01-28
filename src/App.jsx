import { useState } from 'react'
import ReactDom from 'react-dom/client'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact   from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
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
       <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <NavBar/>
      <Home/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
