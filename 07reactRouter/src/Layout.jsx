import React from 'react'
import Header from './components/Header/Header.jsx'

import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     {/* here only outlet component will change, but header and footer will remain const  */}
     <Footer/>
    </>
  )
}

export default Layout