import React from "react"
// import { Link } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"

const contact = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <section className="container">
        <h1>CONTACT</h1>

        <hr />
        <p>Le meilleur moyen de nous contacter!</p>
      </section>
    </React.Fragment>
  )
}

export default contact
