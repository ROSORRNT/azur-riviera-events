import React from "react"
import { Link } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"
import PointFortEQ from "../components/UIElements/PointFortEq"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import "../components/css/layout.css"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.strongPoints.childImageSharp.fluid}>
        <Banner title="Points Forts">
          <Link to="/strongpoints#moreEq" className="button">
            Voir plus
          </Link>
        </Banner>
      </StyledHero>
      <PointFortEQ />
    </React.Fragment>
  )
}

export const query = graphql`
  {
    strongPoints: file(relativePath: { eq: "strongPo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
