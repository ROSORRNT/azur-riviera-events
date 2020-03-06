import React from "react"
import { Link } from "gatsby"

import "./NavLinks.css"

const NavLinks = () => {
  const contentLinks = (
    <React.Fragment>
      <li>
        <Link to="/entreprises" activeClassName="active">
          Évènement entreprises
        </Link>
      </li>
      <li>
        <Link to="/teambuilding" activeClassName="active">
          Cohésion d'équipe
        </Link>
      </li>
      <li>
        <Link to="/outdoor" activeClassName="active">
          Voyage et découvertes
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          Points Forts
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
      </li>
    </React.Fragment>
  )

  return <ul className="nav-links">{contentLinks}</ul>
}

export default NavLinks
