import React from "react"
import { Link } from "gatsby"

import "./SideLinks.css"

const SideLinks = props => {
  const { anchorLinks } = props
  return (
    <ul className="links-list">
      {anchorLinks}

      <li>
        <Link to="/news">Actualités</Link>
      </li>
      <li>
        <Link to="/contact">Devis</Link>
      </li>
      {/* <li>
        <Link to="/faq">FAQ</Link>
      </li> */}
    </ul>
  )
}

export default SideLinks
