import React from "react"
import MainNavigation from "../components/Navigation/MainNavigation"
import About from "../components/UIElements/About"
import "../components/css/layout.css"

const about = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <About />
    </React.Fragment>
  )
}

export default about
