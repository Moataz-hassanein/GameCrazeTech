import React from 'react'
import Header from "../Components/Pages/Header";
import Footer from "../Components/Pages/Footer";
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout