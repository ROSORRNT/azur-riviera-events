import React from "react"
import { Link } from "gatsby"

import "./SideLinks.css"

const SideLinks = props => {
  const { anchorLinks } = props
  return (
    <ul className="links-list">
      {anchorLinks}
      <li>
        <Link to="/about">Points Forts</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  )
}

export default SideLinks
