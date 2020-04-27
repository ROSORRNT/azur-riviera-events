import React from "react"

import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "./Title"

import { FaMoneyCheck, FaMemory } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { MdNaturePeople } from "react-icons/md"
import { GiTeamIdea, GiHumanPyramid } from "react-icons/gi"

const getAbout = graphql`
  query {
    aboutImage: file(relativePath: { eq: "teamCo.jpg" }) {
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
        <Title title="cohesion" subtitle="d'equipes" />
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
                <MdNaturePeople /> Large gamme d’activités en intérieur ou
                extérieur pour des groupes de toutes tailles
              </li>

              <li>
                {" "}
                <GiHumanPyramid /> Mettre l’humain au centre des activités
              </li>
              <li>
                {" "}
                <IoIosPeople /> Réseau de partenaires en France et à l’étranger
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
