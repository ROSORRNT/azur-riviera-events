import React from "react"
import { Link } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"
import About from "../components/UIElements/About"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import "../components/css/layout.css"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.aboutBackground.childImageSharp.fluid}>
        <Banner
          title="À propos de nous"
          info="Charte de nos valeurs - Partenaires - Expériences."
        >
          <Link to="/about#charte" className="button">
            Voir plus
          </Link>
        </Banner>
      </StyledHero>
      <About />
    </React.Fragment>
  )
}

export const query = graphql`
  {
    aboutBackground: file(relativePath: { eq: "aboutBackground.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
