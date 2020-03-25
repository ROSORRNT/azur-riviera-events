import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaHandsHelping, FaGlobeAmericas, FaCommentDots } from "react-icons/fa"

import MainNavigation from "../components/Navigation/MainNavigation"
import SideNavigation from "../components/Navigation/SideNavigation"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import Card from "../components/UIElements/Card"

export default ({ data }) => {
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/entreprises#seminaires">Séminaires</Link>
      </li>
      <li>
        <Link to="/entreprises#conferences">Conférence</Link>
      </li>
      <li>
        <Link to="/entreprises#communication">Communication</Link>
      </li>
      <li>
        <Link to="/entreprises#comite">Comité d'entreprise</Link>
      </li>
      <li>
        <Link to="/entreprises#transport">Transport - Yatching</Link>
      </li>
      <li>
        <Link to="/strongpoints">Points forts</Link>
      </li>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <MainNavigation className="main-header" />
      <StyledHero img={data.seminarBcg.childImageSharp.fluid}>
        <Banner
          title="évènements d'entreprise"
          info="Une large gamme d’activités, et un interlocuteur unique !"
        >
          <Link to="/entreprises#seminaires" className="button">
            Voir plus
          </Link>
        </Banner>
      </StyledHero>
      <main className="container">
        <br />
        <section className="grid-container">
          <SideNavigation anchorLinks={anchorLinksList} />
          <div>
            <Card>
              <p>
                <FaHandsHelping /> Nous vous accompagnons pour vos
                <strong> séminaires, conférences et team-building</strong> de la
                conception à la réalisation.
              </p>
              <p>
                <FaGlobeAmericas /> Pour vos
                <strong> voyages d’affaires en France et à l’étranger</strong>,
                nous sommes à vos côtés pour une organisation optimale!
              </p>
              <p>
                <FaCommentDots /> Nous complétons notre offre en vous proposant
                de vous accompagner dans votre
                <strong> communication digitale indispensable</strong> pour
                donner de la valeur ajoutée à votre événement. Pour plus d'infos{" "}
                <span>
                  <Link to="/faq">voir notre FAQ.</Link>
                </span>{" "}
              </p>
            </Card>

            <article id="seminaires">
              <h1>Séminaire</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.seminaire.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <h3>
                      Un large réseau de
                      <strong> partenaires</strong> locaux ou régionaux
                      rigoureusement sélectionnés.
                    </h3>
                    <p>
                      Dès que nous recevons votre demande, nous établissons
                      ensemble un agenda de travail. Par des réunions
                      régulières, nous vous tenons informés de l’état
                      d’avancement de votre évènement.
                    </p>
                    <p>
                      Nous vous conseillons sur le choix du lieu en fonction de
                      la taille de votre groupe et de l’objectif de votre
                      réunion.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Ensemble, nous effectuons des visites de repérage pour
                      vous aider à choisir le lieu le mieux adapté à vos
                      attentes. Selon vos besoins, nous vous donnons un devis
                      détaillé de chaque prestation pour vous garantir des coûts
                      maitrisés.
                    </p>
                    <p>
                      Nos activités de cohésion d’équipes{" "}
                      <strong> (team building ou team learning)</strong> vous
                      sont aussi proposées pour agrémenter votre séminaire. Il
                      est aujourd’hui incontournable pour mieux se connaître, de
                      participer à ces animations ludiques, sportives ou
                      culturelles dans le cadre de réunion avec vos
                      collaborateurs ou vos clients.
                    </p>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.seminaireTwo.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="conferences">
              <h1>Conférence</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.confTwo.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <h3>
                      Nous vous accompagnons dans la réalisation de vos
                      séminaires de la conception jusqu’au jour J.
                    </h3>
                    <p>
                      Dès que nous recevons votre demande, nous établissons
                      ensemble un agenda de travail. Par des réunions
                      régulières, nous vous tenons informés de l’état
                      d’avancement de votre évènement.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Selon vos besoins, nous vous donnons un devis détaillé
                      pour chaque prestation:
                    </p>
                    <ul>
                      <li>- Recherche de lieux et d’hébergement</li>
                      <li>- Location de salle et salles de sous-commission</li>
                      <li>
                        - Support de communication: signalétique, flyers, print,
                        site internet.{" "}
                      </li>
                      <li>- Vidéo-conférence</li>
                      <li>
                        - Traiteur (café d’accueil, pauses, repas, cocktail)
                      </li>
                      <li>- Traducteur</li>
                      <li>- Photographe</li>
                      <li>- Attaché de presse</li>
                      <li>
                        - Transport et logistique de votre lieu d’hébergement
                        sur le lieu de la conférence
                      </li>
                    </ul>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.conf.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="communication">
              <h1>Communication</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.confTwo.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <h3>
                      Nous vous accompagnons dans la réalisation de vos
                      séminaires de la conception jusqu’au jour J.
                    </h3>
                    <p>
                      Dès que nous recevons votre demande, nous établissons
                      ensemble un agenda de travail. Par des réunions
                      régulières, nous vous tenons informés de l’état
                      d’avancement de votre évènement.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Selon vos besoins, nous vous donnons un devis détaillé
                      pour chaque prestation:
                    </p>
                    <ul>
                      <li>- Recherche de lieux et d’hébergement</li>
                      <li>- Location de salle et salles de sous-commission</li>
                      <li>
                        - Support de communication: signalétique, flyers, print,
                        site internet.{" "}
                      </li>
                      <li>- Vidéo-conférence</li>
                      <li>
                        - Traiteur (café d’accueil, pauses, repas, cocktail)
                      </li>
                      <li>- Traducteur</li>
                      <li>- Photographe</li>
                      <li>- Attaché de presse</li>
                      <li>
                        - Transport et logistique de votre lieu d’hébergement
                        sur le lieu de la conférence
                      </li>
                    </ul>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.conf.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="comite">
              <h1>Comité d'entreprise</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.comiteEntreprise.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <p>
                      Nous vous conseillons sur le choix du lieu en fonction de
                      la taille de votre groupe et de l’objectif de votre
                      réunion.
                      <br />
                      Ensemble, nous effectuons des visites de repérage pour
                      vous aider à choisir le lieu le mieux adapté à vos
                      attentes. Selon vos besoins, nous vous donnons un devis
                      détaillé de chaque prestation pour vous garantir des coûts
                      maitrisés.
                    </p>
                    <p>
                      Vous pouvez puiser quelques idées dans notre catalogue
                      d’activités en mer, à la montagne ou à la campagne.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Nous saurons nous adapter à vos budgets pour organiser vos
                      manifestations familiales avec ou sans hébergement:
                    </p>
                    <ul>
                      <li>- Kart, motoneige, VTT</li>
                      <li>- Baptême parapente</li>
                      <li>
                        - Week end sur le thème “Nos chères colonies de vacances
                      </li>
                      <li>
                        - Jeux de plages, course d’orientation, rallye sur mer
                        et en ville.
                      </li>
                    </ul>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.comiteEntrepriseTwo.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                </div>
              </Card>
            </article>

            <article id="transport">
              <h1>Transport-Yachting</h1>
              <Card>
                <div className="grid-article">
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.yatching.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <p>Vous recherchez un transport durant votre séjour ?</p>
                    <p>
                      Pour accueillir vos clients à l’aéroport, choisissez
                      l’excellence et un service personnalisé avec un hôte qui
                      se chargera de leur transport sur le lieu de la résidence.
                    </p>
                    <p>
                      Nous vous apportons toutes nos solutions avec nos
                      prestataires pour vous permettre de vous déplacer à votre
                      guise dans la région:
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <ul style={{ lineHeight: "1.5rem" }}>
                      <li>- Voiture avec chauffeur jusqu’à 8 personnes</li>
                      <li>
                        - Minibus ou autocars de tourisme pour vos groupes
                      </li>
                      <li>
                        - Hélicoptère pour vous amener rapidement sur Monaco
                        mais aussi pour vous rendre sur des sites dans l’arrière
                        pays
                      </li>
                      <li>
                        - Yacht, voilier, catamaran pour vos vacances ou pour
                        vivre une expérience fabuleuse sur une journée le long
                        du littoral.
                      </li>
                    </ul>
                    <p>
                      Fiabilité, confiance, qualité, sécurité sont nos critères
                      pour vous garantir des services haut de gamme.
                    </p>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.helico.childImageSharp.fluid}
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
    seminarBcg: file(relativePath: { eq: "seminarB.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    conf: file(relativePath: { eq: "conf.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    confTwo: file(relativePath: { eq: "conf2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seminaire: file(relativePath: { eq: "seminaire.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    seminaireTwo: file(relativePath: { eq: "seminaire2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    comiteEntreprise: file(relativePath: { eq: "comite-entreprise.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    comiteEntrepriseTwo: file(relativePath: { eq: "comite-entreprise2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yatching: file(relativePath: { eq: "yachtingOne.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    helico: file(relativePath: { eq: "helico.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
