import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Title from "./../UIElements/Title"
import MainNavigation from "../Navigation/MainNavigation"
import Card from "../UIElements/Card"
import styles from "./../css/about.module.css"
import Footer from "../UIElements/Footer"
import VedettePosts from "../Blog/VedettePosts"

const getImages = graphql`
  query Images {
    indexImage: file(relativePath: { eq: "vueCollinechateau.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fluid: file(relativePath: { eq: "formulaOne.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sejoursEntreprise: file(relativePath: { eq: "sejours-entreprise.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    comiteEntreprise: file(relativePath: { eq: "team2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sport: file(relativePath: { eq: "sport.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    culture: file(relativePath: { eq: "culture.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yatching: file(relativePath: { eq: "yatching.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Layout = () => {
  const data = useStaticQuery(getImages)
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <section>
          <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
              <Title
                className={styles.homeTitle}
                title="Azur Riviera"
                subtitle="Events"
              />
              <h3 className="home--subtitle">
                Createurs et concepteurs d'evenements
              </h3>
              <div className={styles.imgContainer}>
                <Img
                  fluid={data.indexImage.childImageSharp.fluid}
                  alt="awesome landscape"
                />
              </div>
            </article>{" "}
            <article className={styles.aboutInfo}>
              <Card style={{ marginTop: "1rem" }}>
                <p className="home--text">
                  <strong>AZUR RIVIERA EVENTS</strong> est une agence
                  événementielle et de tourisme basée à NICE depuis 2005.{" "}
                </p>
                <p className="home--text">
                  <strong> Notre savoir-faire</strong> : créer et concevoir vos
                  événements professionnels ultra-personnalisés pour qu'ils
                  soient à l'image de vos valeurs et de vos objectifs.
                </p>
                <p className="home--text">
                  Toutes les compétences sont réunies{" "}
                  <strong> au sein d'une même agence</strong>
                  pour vous offrir une panoplie de services autour de
                  l'événementiel, du tourisme et de la communication.
                </p>
                <p className="home--text">
                  Nous vous garantissons des prestations de qualité grâce aux
                  engagements que nous avons pris avec nos prestataires qui ont
                  adhéré à la <strong>charte de nos valeurs</strong>.
                </p>
              </Card>
            </article>
          </div>
        </section>

        <section id="plans">
          <h1
            style={{ marginTop: "3rem", marginBottom: "2rem" }}
            className="section-title"
          >
            NOS SERVICES SUR MESURE
          </h1>
          <div className="plan__list">
            <article className="plan plan--highlighted__enterprises">
              <h1 className="plan__title--dark plan--shadow">
                EVENEMENTS ENTREPRISES
              </h1>
              <h2 className="plan__annotation">
                Séminaire Conférence <br />
                Communication Logistique
                <br />
                Comité d'entreprise
              </h2>
              <h3>
                Nous sommes à vos côtés pour une organisation optimale et
                personnalisée{" "}
              </h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  <strong>Interlocuteur unique</strong>, expertise, conseil
                </li>

                <li className="plan__feature">
                  Large réseau de prestataires pour créer avec vous un{" "}
                  <strong> événement innovant </strong>et sur-mesure.
                </li>
              </ul>
              <div>
                <button className="button entreprises">
                  {" "}
                  <Link to="/entreprises"> En savoir plus.</Link>
                </button>
              </div>
            </article>

            <article className="plan plan--highlighted__teambuilding">
              <h1 className="plan__title--dark plan--shadow">
                COHESION D’EQUIPES
              </h1>
              <h2 className="plan__annotation">
                {" "}
                Sport et <br />
                Culture <br /> Challenge <br /> Performance
              </h2>
              <h3>
                Divertir, fédérer, sensibiliser, motiver vos équipes sur la Côte
                d’Azur
              </h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  Nous concevons des{" "}
                  <strong> activités, animations, jeux d’entreprise </strong> de
                  toutes tailles adaptés aux besoins et stratégies des
                  entreprises.
                </li>
                <li className="plan__feature">
                  Nous mettons en avant la culture, le dépassement de soi, la
                  convivialité, le partage.
                </li>
                <li className="plan__feature">
                  Notre démarche est solidaire en limitant l’impact sur
                  l’environnement.
                </li>
                <li className="plan__feature">
                  Continuez à travers ces animations à véhiculer{" "}
                  <strong> les valeurs fortes de votre entreprise</strong>.
                </li>
              </ul>
              <div>
                <button className="button">
                  <Link to="/teambuilding"> En savoir plus.</Link>
                </button>
              </div>
            </article>

            <article className="plan plan--highlighted__outdoor">
              <h1 className="plan__title--dark plan--shadow">
                VOYAGE ET DECOUVERTE
              </h1>
              <h2 className="plan__annotation">
                {" "}
                Réceptif <br /> Loisirs <br /> Visites et activités sportives et
                culturelles <br /> Excursions
              </h2>
              <h3>
                Séjours et voyages d’affaires et incentive dans la région Sud,
                Provence, Alpes et Côte d’Azur .
              </h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  Nous choisissons et organisons <strong> vos séjours </strong>
                  pour partir à la découverte d’une région pleine de{" "}
                  <strong> belles surprises</strong>, de la Méditerranée aux
                  massifs provençaux.
                </li>
                <li className="plan__feature">
                  Des lieux mythiques aux sites préservés, nous vous ferons
                  vivre <strong> des moments inoubliables </strong>et vous faire
                  partager notre sens de l’écoresponsabilité.
                </li>
              </ul>
              <div>
                <button className="button">
                  <Link to="/outdoor"> En savoir plus.</Link>
                </button>
              </div>
            </article>
          </div>
        </section>

        <section id="key-features">
          <h1 className="section-title">NOS EVENEMENTS PERSONNALISES</h1>
          <ul className="key-feature__list">
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/teambuilding#sport-culture">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.fluid.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">Sport et Culture</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/outdoor">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.sejoursEntreprise.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">Voyage</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/entreprises#seminaires">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.comiteEntreprise.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">Evénements entreprises</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/teambuilding#ateliers">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.culture.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">
                Découvertes Culturelles
              </p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/outdoor#vtt-rally-regate">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.sport.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">Activités Sportives</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Link to="/entreprises#transport">
                  <Img
                    style={{ borderRadius: "50%" }}
                    fluid={data.yatching.childImageSharp.fluid}
                  />
                </Link>
              </div>
              <p className="key-feature__description">Yatching</p>
            </li>
          </ul>
        </section>
        <VedettePosts />
      </main>

      <Footer>
        <section>
          <h3>ARTICLES RECENTS</h3>
          <nav>
            <ul className="main-footer__links">
              <li className="main-footer__link article">
                La motivation, source de bien-être !
              </li>
              <li className="main-footer__link article">
                Un séminaire à la montagne ?
              </li>
              <li className="main-footer__link article">
                Féstivité de fin d'année, besoin d'une idée ?
              </li>
              <li className="main-footer__link article">
                Portes ouvertes Méditeranéennes
              </li>
              <li className="main-footer__link article">
                Conférence et Coupe du monde Féminin 2019
              </li>
            </ul>
          </nav>
        </section>
      </Footer>
    </React.Fragment>
  )
}

export default Layout
