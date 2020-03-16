import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Title from "./../UIElements/Title"
import MainNavigation from "../Navigation/MainNavigation"
import Card from "../UIElements/Card"
import styles from "./../css/about.module.css"
import Footer from "../UIElements/Footer"

const getImages = graphql`
  query Images {
    indexImage: file(relativePath: { eq: "sejour.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluid: file(relativePath: { eq: "formulaOne.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sejoursEntreprise: file(relativePath: { eq: "sejours-entreprise.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    comiteEntreprise: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sport: file(relativePath: { eq: "sport.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    culture: file(relativePath: { eq: "culture.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    yatching: file(relativePath: { eq: "yatching.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
                title="Azur Rivera"
                subtitle="Events"
              />
              <div className={styles.imgContainer}>
                <Img
                  fluid={data.indexImage.childImageSharp.fluid}
                  alt="awesome landscape"
                />
              </div>
            </article>{" "}
            <article className={styles.aboutInfo}>
              <Card>
                <p style={{ width: "90%", textAlign: "justify" }}>
                  Notre métier est de rendre vos{" "}
                  <strong>événements uniques</strong>, personnalisés et de les
                  concevoir pour qu’ils soient{" "}
                  <strong> à l’image de votre entreprise</strong>, correspondent
                  à<strong> vos rêves</strong>, répondent à{" "}
                  <strong> vos exigences</strong>. La maîtrise de plusieurs
                  compétences concentrées au sein d’une seule et même agence
                  vous offre un service <strong>sur-mesure</strong> et sans
                  intermédiaires.{" "}
                </p>
                <p style={{ width: "90%", textAlign: "justify" }}>
                  {" "}
                  Nous pouvons aussi nous charger de votre{" "}
                  <strong>communication digitale</strong>
                  autour de votre événement pour que vous puissiez vous reposer
                  sur un partenaire qui comprend <strong> vos objectifs</strong>
                  , vous apporte ses
                  <strong> conseils et assistance</strong>, soit à vos côtés
                  pour qu’ainsi vous puissiez vous sentir serein le jour J.{" "}
                </p>
                <p style={{ width: "90%", textAlign: "justify" }}>
                  {" "}
                  Nous vous garantissons des prestations de qualité grâce aux
                  engagements que nous avons pris avec nos prestataires qui ont
                  adhéré à la
                  <strong> charte de nos valeurs</strong>.
                </p>
              </Card>
            </article>
          </div>
        </section>

        <section id="plans">
          <h1
            style={{ marginTop: "2.5rem", marginBottom: "2rem" }}
            className="section-title"
          >
            NOS SERVICES SUR MESURE
          </h1>
          <div className="plan__list">
            <article className="plan plan--highlighted__enterprises">
              <h1 className="plan__title--dark">Évènements d’entreprises</h1>
              <h2 className="plan__annotation">
                Séminaires Conférences <br />
                Comité d'entreprise <br />
                Transport - Yatching
              </h2>
              <h3>Nous sommes à vos côtés pour une organisation optimale! </h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  De la conception à la réalistation
                </li>
                <li className="plan__feature">
                  Pour vos{" "}
                  <strong> séminaires, conférences et team-building</strong>
                </li>
                <li className="plan__feature">
                  Pour vos{" "}
                  <strong> voyages d’affaires en France et à l’étranger</strong>
                </li>
                <li className="plan__feature">
                  Un réseau de partenaires et fournisseurs rigoureusement
                  sélectionnés en matière de sécurité, d’éthique, de respect des
                  coûts et des délais.
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
              <h1 className="plan__title--dark">Cohésion d’équipe</h1>
              <h2 className="plan__annotation">
                {" "}
                Sport et <br />
                Culture{" "}
              </h2>
              <h3>Divertir, Fédérer, Sensibiliser vos équipes.</h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  Des activités conçues spécialement pour les entreprises de
                  toutes tailles.{" "}
                </li>
                <li className="plan__feature">
                  Nous nous inscrivons dans une démarche solidaire et limitant
                  l’impact sur l’environnement.
                </li>
                <li className="plan__feature">
                  Nous mettons en avant la culture, le dépassement de soi, la
                  convivialité, le partage.
                </li>
                <li className="plan__feature">
                  Continuez à travers ces animations à véhiculer les valeurs
                  fortes de votre entreprise.
                </li>
              </ul>
              <div>
                <button className="button">
                  <Link to="/teambuilding"> En savoir plus.</Link>
                </button>
              </div>
            </article>

            <article className="plan plan--highlighted__outdoor">
              <h1 className="plan__title--dark">
                Voyage et découvertes sur la Côte d’Azur.
              </h1>
              <h2 className="plan__annotation">
                {" "}
                Randonnées - Parcs VTT, Rally, Régate Canyonning, Rafting,
                Parapente{" "}
              </h2>
              <h3>Voyages et séjours sur la Côte d’Azur.</h3>
              <ul className="plan__features">
                <li className="plan__feature">
                  Organisez
                  <strong> vos voyages et séjours </strong> sur la Côte d’Azur{" "}
                  pour partir à la découverte d’une région pleine de surprises!
                </li>
                <li className="plan__feature">
                  Rencontres avec des passionnés au savoir-faire millénaire,
                  apprentissage des cultures et tradition…
                </li>
                <li className="plan__feature">
                  Attendez-vous à vivre des moments inoubliables !
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

        <section style={{ marginBottom: "4.5rem" }} id="key-features">
          <h1 className="section-title">NOS ÉVÈNEMENTS PERSONNALISÉS</h1>
          <ul className="key-feature__list">
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.fluid.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">Sport et Culture</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.sejoursEntreprise.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">Séjours entreprises</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.comiteEntreprise.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">Comité d'entreprise</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.culture.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">
                Découvertes Culturelles
              </p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.sport.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">Activités Sportives</p>
            </li>
            <li className="key-feature">
              <div className="key-feature__image">
                <Img
                  style={{ borderRadius: "50%" }}
                  fluid={data.yatching.childImageSharp.fluid}
                />
              </div>
              <p className="key-feature__description">Yatching</p>
            </li>
          </ul>
        </section>
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
