import React from "react"

import MainNavigation from "../components/Navigation/MainNavigation"
import StyledHero from "../components/UIElements/StyledHero"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.connectBcg.childImageSharp.fluid}></StyledHero>
      <section className="container">
        <br />
        <h1>CONTACT</h1>

        <p>Le meilleur moyen de nous contacter!</p>
      </section>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
