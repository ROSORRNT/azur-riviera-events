import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./NavLinks.css"

const NavLinks = () => {
  const contentLinks = (
    <React.Fragment>
      <li>
        <AniLink fade to="/entreprises" activeClassName="active">
          Evènements d'entreprise
        </AniLink>
      </li>
      <li>
        <AniLink fade to="/teambuilding" activeClassName="active">
          Cohésion d'équipe
        </AniLink>
      </li>
      <li>
        <AniLink fade to="/outdoor" activeClassName="active">
          Voyage et découvertes
        </AniLink>
      </li>
      <li>
        <AniLink fade to="/about" activeClassName="active">
          A propos
        </AniLink>
      </li>
      <li>
        <AniLink fade to="/contact" activeClassName="active">
          Devis
        </AniLink>
      </li>
    </React.Fragment>
  )

  return <ul className="nav-links">{contentLinks}</ul>
}

export default NavLinks
