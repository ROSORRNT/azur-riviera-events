import React, { useState } from "react"

import logoHome from "../../images/logos/logoAzurRivieraHome.jpg"

import MainHeader from "./MainHeader"
import NavLinks from "./NavLinks"
import SideDrawer from "./SideDrawer"
import Backdrop from "../UIElements/Backdrop"

import "./MainNavigation.css"

const MainNavigation = () => {
  const [drawIsOpen, setDrawIsOpen] = useState(false)

  const openDrawerHandler = () => setDrawIsOpen(true)

  const closeDrawerHandler = () => setDrawIsOpen(false)

  return (
    <React.Fragment>
      {drawIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <a href="/">
            <img src={logoHome} alt="logo" />
          </a>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
