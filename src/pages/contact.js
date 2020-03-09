import React from "react"

import MainNavigation from "../components/Navigation/MainNavigation"
import StyledHero from "../components/UIElements/StyledHero"
import Title from "../components/UIElements/Title"
import Contact from "../components/FormElements/Contact"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.connectBcg.childImageSharp.fluid}></StyledHero>
      <section className="container">
        <br />
        <Contact>
          <Title title="Nous" subtitle="contacter" />
        </Contact>
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
