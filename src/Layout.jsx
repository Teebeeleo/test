import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Footer from './Footer'

function Layout({children}) {

  return (
    <>
    <Navbar />
    <SideBar />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout