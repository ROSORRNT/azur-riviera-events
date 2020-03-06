import React from "react"
import MainNavigation from "../components/Navigation/MainNavigation"

const News = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <section className="container">
        <h1>ACTUALITÉES</h1>
        <hr />
        <p>Les actualités apparaîtons ici.</p>
      </section>
    </React.Fragment>
  )
}

export default News
