import React from "react"

import MainNavigation from "../components/Navigation/MainNavigation"
import StyledHero from "../components/UIElements/StyledHero"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
      <section className="container">
        <br />
        <h1>Actualiées</h1>
        <p>Les actualités apparaîtons ici.</p>
      </section>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
