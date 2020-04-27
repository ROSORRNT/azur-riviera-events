import React from "react"

import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "./Title"

import { FaCarAlt, FaMemory } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { GiEcology } from "react-icons/gi"
const getAbout = graphql`
  query {
    aboutImage: file(relativePath: { eq: "pointOut.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PointFortEQ = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <React.Fragment>
      <section id="moreOut" style={{ marginBottom: "3rem" }}>
        {" "}
        <Title title="voyages" subtitle="et decouvertes" />
        <article className={styles.aboutCenter} style={{ marginTop: "0" }}>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <Img
                fluid={aboutImage.childImageSharp.fluid}
                alt="awesome landscape"
              />
            </div>
          </article>
          <article>
            <h4>Confiez nous vos rêves, nous saurons les réaliser !</h4>

            <ul className={styles.aboutList}>
              <li>
                {" "}
                <FaCarAlt /> Immatriculation d’agence de voyage avec garanties
                financières et assurances professionnelles
              </li>

              <li>
                {" "}
                <IoIosPeople /> Réseau de partenaires en France et à l’étranger
              </li>

              <li>
                {" "}
                <FaMemory /> Créativité et originalité des concepts pour des
                séjours uniques
              </li>

              <li>
                {" "}
                <GiEcology /> Développement de circuits écotouristiques en
                méditerranée en relation avec la protection de la nature
              </li>
            </ul>
          </article>
        </article>
      </section>
    </React.Fragment>
  )
}

export default PointFortEQ
