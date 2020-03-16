import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import MainNavigation from "../components/Navigation/MainNavigation"
import SideNavigation from "../components/Navigation/SideNavigation"
import Card from "../components/UIElements/Card"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import { graphql } from "gatsby"

export default ({ data }) => {
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/outdoor#randonees-parcs">Randonnées - Parcs</Link>
      </li>
      <li>
        <Link to="/outdoor#vtt-rally-regate">VTT, Rally, Régate</Link>
      </li>
      <li>
        <Link to="/outdoor#canyonning">Canyonning, Rafting, Parapente</Link>
      </li>
      <li>
        <Link to="/strongpoints">Points forts</Link>
      </li>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <MainNavigation className="main-header" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Voyage et Découvertes"
          info="Voyages et séjours sur la Côte d’Azur."
        >
          <Link to="/outdoor#randonees-parcs" className="button">
            Voir plus
          </Link>
        </Banner>
      </StyledHero>
      <main className="container">
        <br />
        <section className="grid-container">
          <SideNavigation anchorLinks={anchorLinksList} />
          <div>
            <article>
              <Card>
                <h1 style={{ textAlign: "center" }}>
                  UN FORMIDABLE TERRAIN DE JEUX
                </h1>
                <p>
                  La Côte d’Azur offre de nombreuses escapades, des visites, des
                  balades pour partir à la découverte de la culture, du
                  patrimoine et des traditions.
                </p>
                <p>
                  Nos visites guidées sont élaborées selon les thématiques
                  souhaitées avec un service clé en main:
                </p>

                <ul
                  style={{
                    color: "var(--fontColorDark)",
                    fontSize: "1.2rem",
                  }}
                >
                  <li>- Guide professionnelle parlant plusieurs langues</li>
                  <li>- Transport en voiture avec chauffeur ou mini-bus</li>
                  <li>
                    - Sélection de restaurant respectant les exigences de nos
                    clients
                  </li>
                  <li>- Visites réservées avec accès “VIP”</li>
                  <li>
                    - Animations et ateliers avec des spécialistes (peintre
                    céramiste, potier, souffleur de verre, viticulteur,
                    parfumeur…).
                  </li>
                </ul>

                <p>
                  Nous vous ferons découvrir différentes facettes de notre
                  région qui vous réservent de très belles surprises et des
                  moments inoubliables.
                </p>
              </Card>
            </article>

            <article id="randonees-parcs">
              <h1>Randonnées - Parcs Naturels et Jardins</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.rando.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <p>
                      Partez à la découverte des Alpes du Sud avec le parc du
                      Mercantour et ses six vallées!
                      <strong>
                        Randonnées à pieds, à cheval, en VTT toute l’année
                      </strong>{" "}
                      , c’est l’atout majeur de notre région qui vous offre ses
                      paysages somptueux et sa faune unique.
                    </p>
                    <h3>
                      Hébergement dans les arbres, au bord d’une rivière dans un
                      milieu sauvage et protégé!
                    </h3>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Se réveiller avec le chant des oiseaux, se laisser bercer
                      par le bruit de la rivière, se prélasser dans un pré ou
                      sur les rochers, entouré de verdure; ce sont les bonheurs
                      simples pour arrêter le temps et profiter de la beauté
                      naturelle qui nous entoure.
                    </p>
                    <p>
                      <strong>Visitez les jardins de Menton</strong>, réputés
                      pour ses odeurs de citrons, d’orangers et de fleurs
                      tropicales, dépaysement garanti ! <br />{" "}
                      <strong>
                        Et aussi la Provence toute proche avec son patrimoine et
                        ses champs de lavande.{" "}
                      </strong>
                    </p>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.randoTwo.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="vtt-rally-regate">
              <h1>VTT, RALLY, RÉGATE</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.vtt.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <p>
                      <strong>Cyclisme </strong> : que vous soyez des villes ou
                      des champs, vous trouverez le circuit{" "}
                      <strong> VTT, vélo électrique ou segway</strong> qui vous
                      ravira !
                    </p>
                    <p>
                      Nous choisirons ensemble le moyen de transport le mieux
                      adapté afin de vivre intensément ces expériences:
                    </p>
                    <ul>
                      <li>
                        - Visite de vignoble autour de Nice, Saint Paul ou dans
                        le Var et en Provence,
                      </li>
                      <li>- Découverte des villages hauts perchés,</li>
                      <li>
                        - Circuit en ville à la découverte du patrimoine local,
                      </li>
                      <li>- Parcours d’orientation dans l’arrière pays.</li>
                    </ul>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      {" "}
                      <strong>Rallye</strong> : à pied, en vélo ou en voiture
                      ancienne, le rallye est un excellent moyen de découvrir
                      une ville ou une région tout en cultivant le goût du
                      challenge. Il peut être sportif, culturel, historique,
                      gastronomique ou artistique.
                    </p>
                    <p>
                      <strong> Régate</strong> : notre terrain de jeu sur la
                      “grande bleue” ! A bord d’un scooter des mers, d’un pointu
                      bateau de pécheur traditionnel, d’un semi-rigide, d’un
                      voilier ou d’un catamaran, nous vous ferons passer des
                      instants inoubliables sportifs et ludiques.
                    </p>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.regate.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="canyonning">
              <h1>CANYONING, RAFTING ET PARAPENTE</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.canyoning.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <p>
                      Pour les amateurs de sensations fortes, nous vous invitons
                      à vivre des moments d’exceptions à travers des activités
                      collectives et sportives.{" "}
                    </p>
                    <p>
                      {" "}
                      <strong>
                        Montée d’adrénaline et souvenirs garantis!
                      </strong>
                    </p>
                    <p>
                      Nous vous proposons différentes disciplines encadrées par
                      des moniteurs diplômés d’état, dans les airs ou bien en
                      milieu aquatique.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <ul>
                      <li>
                        - <strong> Canyoning</strong> : amusant et excitant
                        d’interagir avec la nature entre les baignades dans les
                        rivières, les descentes de toboggans et des sauts dans
                        les piscines naturelles pour tous niveaux,
                      </li>
                      <li>
                        - <strong> Rafting</strong>: descente des Gorges du
                        Verdon sur ses eaux verdoyantes dans ce site unique en
                        Europe,
                      </li>
                      <li>
                        -{" "}
                        <strong>Canoé kayak, aqua-rando et hydro-speed</strong>{" "}
                        : en mer ou en rivière, partez à la découverte de
                        sensations différentes au plus près des éléments,
                      </li>
                      <li>
                        - <strong> Parapente</strong>: vous rêviez d’être un
                        oiseau, prenez votre envol pour un baptême de l’air en
                        biplace et survolez des panoramas magiques.
                      </li>
                    </ul>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.rafting.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
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

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "voyage.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rando: file(relativePath: { eq: "randone.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    randoTwo: file(relativePath: { eq: "randone2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vtt: file(relativePath: { eq: "vtt.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    regate: file(relativePath: { eq: "regate.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    canyoning: file(relativePath: { eq: "canyoning.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rafting: file(relativePath: { eq: "rafting.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
