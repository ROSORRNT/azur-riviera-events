import React from "react"
// import Navbar from "./Navbar"

import "./css/layout.css"
import Footer from "./UIElements/Footer"

const Lay = ({ children }) => {
  return (
    <main>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </main>
  )
}

export default Lay
