import React from "react"

import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "./Title"
import Card from "./Card"

import { FaHandRock, FaMoneyCheck, FaMemory } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

import { GiTeamIdea } from "react-icons/gi"

const getAbout = graphql`
  query {
    aboutImage: file(relativePath: { eq: "strongEq.jpg" }) {
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
      <section id="moreEq" style={{ marginBottom: "3rem" }}>
        {" "}
        <Title title="evenements" subtitle="d'entreprise" />
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
                <FaHandRock /> Excellente connaissance des lieux de congrès et
                séminaires
              </li>

              <li>
                {" "}
                <IoIosPeople /> Réseau de partenaires dans toute la France
              </li>

              <li>
                {" "}
                <FaMemory /> Connaissance de la valeur d’un événement unique et
                mémorable
              </li>

              <li>
                {" "}
                <GiTeamIdea /> Compréhension des objectifs et adaptation
              </li>

              <li>
                {" "}
                <FaMoneyCheck /> Prix négociés au plus près des budgets
              </li>
            </ul>
          </article>
        </article>
      </section>
    </React.Fragment>
  )
}

export default PointFortEQ
