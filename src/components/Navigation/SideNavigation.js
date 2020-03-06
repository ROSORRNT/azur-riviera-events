import React from "react"

import MainAside from "./MainAside"
import SideLinks from "./SideLinks"
import Card from "../UIElements/Card"

import "./SideNavigation.css"

const SideNavigation = props => {
  return (
    <MainAside>
      <nav className="side-navigation">
        <Card>
          <SideLinks anchorLinks={props.anchorLinks} />
        </Card>
      </nav>
    </MainAside>
  )
}

export default SideNavigation
