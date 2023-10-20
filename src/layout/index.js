import React from 'react'
import Header from './header'
import Footer from './footer'
import logoImg from "../images/layout/logo/metablog.svg"


const Layout = ({children}) => {
  return (
    <div>
      <Header logo={logoImg} />
      {children}
      <Footer logo={logoImg} />
    </div>
  )
}

export default Layout
