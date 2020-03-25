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
    charte: file(relativePath: { eq: "charte.jpg" }) {
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
  }
`

const About = () => {
  const {
    aboutImage,
    charte,
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
                <h3>25 ans au service de la clientèle internationale.</h3>
                <p>
                  La création de l’agence par sa fondatrice Patricia Le Bras,
                  résulte de 15 années d’expérience dans l’hôtellerie de luxe
                  dans les domaines du management et du commercial. Passionnée
                  par son métier, elle a décidé de s’orienter vers
                  l’évènementiel pour fournir à ses clients des services
                  personnalisés répondant à leurs attentes.
                </p>
                <p>
                  Sa vision du service et ses objectifs sont d’apporter à ses
                  clients des projets sur-mesure de qualité grâce à des coûts
                  maitrisés. La conception même des évènements est véhiculée par
                  l’organisation, par le management et le conseil.
                </p>
                <p>
                  Depuis 2005, l’agence propose le meilleur service à ses
                  fidèles clients
                </p>
                <p>
                  Attachée à l’idée d’une relation saine et pérenne avec ses
                  prestataires, Azur Riviera Prestations s’inscrit dans une
                  démarche de création d’évènements uniques et personnalisés.
                </p>
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
                      fluid={charte.childImageSharp.fluid}
                      alt="awesome landscape"
                    />
                  </div>
                  <ul className={styles.aboutList}>
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
                  Nous avons fidélisé depuis plus de 10 ans,{" "}
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
