import React from "react"

import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "./Title"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="Points" subtitle="Forts" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Confiez nous vos rêves, nous saurons les réaliser !</h4>
          <ul className={styles.aboutList}>
            <li> - Structure à taille humaine</li>

            <li> - Maîtrise de la prestation tout au long de l’évènement</li>

            <li> - Expertise opérationnelle</li>

            <li> - Créativité, synergie, réactivité et adaptation</li>

            <li> - Interlocuteur unique entouré d’une équipe dédiée</li>

            <li> - Coûts et délais respectés</li>
          </ul>
          <button type="button" className="btn-primary">
            Voir plus
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
