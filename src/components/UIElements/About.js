import React from "react"

import styles from "../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Title from "./Title"
import Card from "./Card"
import SideNavigation from "../Navigation/SideNavigation"
import { FaHandRock, FaMoneyCheck, FaBullseye } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { MdExposure, MdCreate } from "react-icons/md"
import { GiTeamIdea } from "react-icons/gi"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mns: file(relativePath: { eq: "mns.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    enedis: file(relativePath: { eq: "enedis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    laLigue: file(relativePath: { eq: "laLigue.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amadeus: file(relativePath: { eq: "amadeus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    caisseEpargne: file(relativePath: { eq: "caisseEpargne.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    charteOne: file(relativePath: { eq: "charteOne.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    aboutImage,
    charteOne,
    enedis,
    kone,
    laLigue,
    amadeus,
    caisseEpargne,
    villeDeNice,
  } = useStaticQuery(getAbout)
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/about#experiences">Expériences</Link>{" "}
      </li>
      <li>
        <Link to="/about#charte">Nos Valeurs</Link>
      </li>
      <li>
        <Link to="/about#partenaires">Partenaires</Link>
      </li>
      <li>
        <Link to="/about#clients">Nos Clients</Link>
      </li>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <section>
        {" "}
        <Title title="Nos point" subtitle="forts" />
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
                <IoIosPeople /> Structure à taille humaine
              </li>

              <li>
                {" "}
                <FaHandRock /> Maîtrise de la prestation tout au long de
                l’évènement
              </li>

              <li>
                {" "}
                <MdExposure /> Expertise opérationnelle
              </li>

              <li>
                {" "}
                <MdCreate /> Créativité, synergie, réactivité et adaptation
              </li>

              <li>
                {" "}
                <GiTeamIdea /> Interlocuteur unique entouré d’une équipe dédiée
              </li>

              <li>
                {" "}
                <FaMoneyCheck /> Coûts et délais respectés
              </li>
            </ul>
          </article>
        </article>
      </section>
      <main style={{ marginTop: "2.5rem" }} className="container">
        <br />
        <section className="grid-container">
          <SideNavigation anchorLinks={anchorLinksList} />
          <div>
            <article id="experiences">
              <h2> Expériences</h2>
              <Card>
                <h3>Au service de clients exigeants</h3>
                <p>
                  Pendant 15 années à travailler dans les plus beaux palaces
                  français, j’avais l’impression de voyager dès que je saluais
                  le portier chaque matin en entrant dans l’hôtel, de ne jamais
                  faire la même chose et d’avoir la possibilité de gérer des
                  équipes, avec l’objectif de donner un service irréprochable.
                  Excellence du service, exigence, qualité et management sont
                  des acquis indissociables de cette première partie de ma vie.
                </p>
                <p>
                  Après un diplôme universitaire dans l’événementiel et la
                  communication, je crée en 2005 mon agence événementielle avec
                  une immatriculation d’agence de voyages qui me donne la
                  légitimité d’organiser tous types d’événements.
                </p>
                <p>
                  Le sud de la France est un formidable terrain de jeu… je vis
                  au milieu de patrimoines culturels exceptionnels qu’il faut
                  protéger, j’ai fait des rencontres avec des personnes venant
                  d’horizons différents culturellement et socialement et tout
                  cela correspondent à mes aspirations. Je veux les partager
                  avec mes clients ainsi que ma vision : savant mélange
                  d’éthique, d’écologie, de solidarité, d’empathie à l’image de{" "}
                  <span>
                    {" "}
                    <Link to="/about#charte">la charte de mes valeurs.</Link>
                  </span>{" "}
                </p>
                <p>Patricia LE BRAS – fondatrice d’Azur Riviera Events</p>
              </Card>
            </article>
            <br />
            <article id="charte">
              <h2 id="charte" style={{ marginTop: "0" }}>
                Charte de nos valeurs
              </h2>
              <Card>
                <h3>Nous portons attention au sens de nos actions.</h3>
                <div className="grid-article">
                  <div className={styles.imgContainer}>
                    <Img
                      fluid={charteOne.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>
                  <ul
                    className={styles.aboutList}
                    style={{ paddingTop: "1.6rem" }}
                  >
                    <li>
                      {" "}
                      <strong>Passion</strong> : partager un projet commun
                    </li>
                    <li>
                      {" "}
                      <strong>Résponsabilité</strong> : garantir des services et
                      respecter nos engagements
                    </li>
                    <li>
                      {" "}
                      <strong>Transparence</strong> : fournir les meilleurs
                      services au juste prix
                    </li>
                    <li>
                      {" "}
                      <strong>Éfficacité</strong> : faire ensemble que votre
                      évènement soit un succès
                    </li>
                    <li>
                      {" "}
                      <strong>Étique</strong> : déontologie et confidentialité
                      au cœur de nos activités
                    </li>
                    <li>
                      {" "}
                      <strong>Empathie</strong> : placer l’humain au centre de
                      l’évènement
                    </li>
                    <li>
                      <strong>Performance</strong> : mettre en place des outils
                      pour mesurer la satisfaction de nos clients
                    </li>
                  </ul>
                </div>
              </Card>
            </article>

            <article id="partenaires">
              <h2>Partenaires</h2>
              <Card>
                <p>
                  Votre interlocuteur unique centralise les{" "}
                  <strong>
                    {" "}
                    différents intervenants au sein d’une même agence.
                  </strong>{" "}
                </p>
                <p>
                  Entourés de <strong> partenaires sélectionnés</strong> qui
                  couvrent tous les domaines d’activités de l’évènementiel et du
                  voyage, nous sommes capable de réaliser{" "}
                  <strong> tous vos projets</strong>.
                </p>
                <p>
                  Nnous avons fidélisé depuis la création de l’agence
                  événementielle,
                  <strong> des professionnels reconnus </strong> pour leur
                  compétence, leur savoir faire et leur disponibilité créant la
                  confiance et la synergie indispensables à la réussite d’un
                  évènement:
                </p>
                <ul
                  style={{ color: "var(--fontColorDark)" }}
                  className={styles.aboutList}
                >
                  <li>
                    <FaBullseye /> hôtels, restaurants, traiteurs, lieux de
                    réception
                  </li>

                  <li>
                    <FaBullseye /> partenaire pour la conception de voyage en
                    France et à l’international{" "}
                  </li>
                  <li>
                    <FaBullseye /> audio-visuel, technique et son{" "}
                  </li>
                  <li>
                    <FaBullseye /> animateurs, guides, traducteurs, hôtesses
                  </li>
                  <li>
                    <FaBullseye /> musiciens, artistes, régisseur
                  </li>
                  <li>
                    <FaBullseye /> photographe, chargé relation presse
                  </li>
                  <li>
                    <FaBullseye /> services de transports avec chauffeurs
                  </li>
                  <li>
                    <FaBullseye /> locations de bateaux, jets
                  </li>
                </ul>
              </Card>
            </article>

            <article id="clients">
              <h2>Nos Clients</h2>
              <Card style={{ marginBottom: "15px" }}>
                <div className="grid-article-col">
                  <div>
                    <Img
                      fluid={enedis.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>

                  <div style={{ width: "50%", height: "auto" }}>
                    <Img
                      fluid={laLigue.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>
                </div>
                <div className="grid-article-col">
                  <div>
                    <Img
                      fluid={amadeus.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>
                  <div>
                    <Img
                      fluid={caisseEpargne.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>
                </div>
              </Card>
            </article>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default About
