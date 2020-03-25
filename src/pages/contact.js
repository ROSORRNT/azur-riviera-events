import React from "react"
import { Link } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"
import StyledHero from "../components/UIElements/StyledHero"
import Title from "../components/UIElements/Title"
import Devis from "../components/FormElements/Devis"
import Footer from "../components/UIElements/Footer"

import styles from "../components/css/footer.module.css"

export default ({ data }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <StyledHero img={data.connectBcg.childImageSharp.fluid}></StyledHero>
      <section className="container">
        <br />
        <Devis>
          <Title className="devis__title" title="Demande de" subtitle="devis" />
        </Devis>
      </section>
      <Footer>
        <section>
          <div className={styles.links}>
            <Link to="/legal">MENTIONS LEGALES</Link>
          </div>
          <div className={styles.copyright}>
            <p>
              45, chemin Collet Baraya - 06670 COLOMARS (NICE) <br />
              <strong>Tél</strong> : 06 60 61 33 99 <br />
              <strong>Mail</strong> : patricia@azur-riviera-events.com
            </p>
          </div>
        </section>
      </Footer>
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
