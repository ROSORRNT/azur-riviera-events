import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"
import SideNavigation from "../components/Navigation/SideNavigation"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import Card from "../components/UIElements/Card"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(data.parfum)
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/teambuilding#sport-culture">Sport et Culture</Link>
      </li>
      <li>
        <Link to="/teambuilding#ateliers">Catalogue</Link>
      </li>
      <li>
        <Link to="/strongpoints">Points forts</Link>
      </li>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <MainNavigation className="main-header" />
      <StyledHero img={data.teambuildingBcg.childImageSharp.fluid}>
        <Banner
          color={"var(--lightBlue)"}
          title="ÉVÈNEMENTS COHÉSION D'ÉQUIPE"
          info="Pour divertir, fédérer, et sensibiliser vos équipes."
        >
          <Link to="/teambuilding#sport-culture" className="button">
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
                Nous vous accompagnons pour vos
                <strong> séminaires, conférences et team-building</strong> de la
                conception à la réalisation.
              </p>
              <p>
                Pour vos
                <strong> voyages d’affaires en France et à l’étranger</strong>,
                nous sommes à vos côtés pour une organisation optimale!
              </p>
              <p>
                Nous complétons notre offre en vous proposant de vous
                accompagner dans votre
                <strong> communication digitale indispensable</strong> pour
                donner de la valeur ajoutée à votre événement. Pour plus d'infos{" "}
                <span>
                  <Link to="/faq">voir notre FAQ.</Link>
                </span>
              </p>
            </Card>

            <article id="sport-culture">
              <h1>Sport et Culture</h1>
              <Card>
                <p>
                  Nous vous accompagnons dans la réalisation de vos séminaires
                  de la conception jusqu’au jour J. Vous bénéficiez de notre
                  connaissance de la région, de notre large réseau de
                  <strong>partenaires</strong> locaux ou régionaux
                  rigoureusement sélectionnés.
                </p>
                <p>
                  Dès que nous recevons votre demande, nous établissons ensemble
                  un agenda de travail. Par des réunions régulières, nous vous
                  tenons informés de l’état d’avancement de votre évènement.
                </p>
                <p>
                  Nous vous conseillons sur le choix du lieu en fonction de la
                  taille de votre groupe et de l’objectif de votre réunion.
                  <br />
                  Ensemble, nous effectuons des visites de repérage pour vous
                  aider à choisir le lieu le mieux adapté à vos attentes. Selon
                  vos besoins, nous vous donnons un devis détaillé de chaque
                  prestation pour vous garantir des coûts maitrisés.
                </p>
                <p>
                  Nos activités de cohésion d’équipes{" "}
                  <strong> (team building ou team learning)</strong> vous sont
                  aussi proposées pour agrémenter votre séminaire. Il est
                  aujourd’hui incontournable pour mieux se connaître, de
                  participer à ces animations ludiques, sportives ou culturelles
                  dans le cadre de réunion avec vos collaborateurs ou vos
                  clients.
                </p>
              </Card>
            </article>

            <section id="ateliers">
              <h2>Exemples d'activités</h2>
              <Card>
                <article>
                  <h3>APPRENTIS PARFUMEUR</h3>
                  <p style={{ textAlign: "center" }}>
                    ½ journée en indoor ou outdoor, jardin, parc..
                  </p>
                  <div>
                    <div className="grid-article">
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.parfum.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                      <div className="activities__content">
                        <p>
                          Inscrire la cohésion d’équipe dans la mémoire
                          olfactive en créant un parfum qui incarne toutes les
                          valeurs de votre entreprise. Laissez vous guider par
                          un Nez et entrer dans le monde fascinant des odeurs et
                          du Parfum.
                        </p>
                        <p>
                          Réalisation : Répartis en équipe, vous apprendrez à
                          stimuler votre mémoire.
                        </p>
                      </div>
                    </div>
                    <div className="grid-article">
                      <div className="activities__content">
                        <p>
                          Vous identifierez les essences incarnant le mieux
                          votre entreprise pour créer votre parfum et lui donner
                          un nom.
                        </p>
                        <p>
                          Formuler, calculer les quantités précises pour ramener
                          la formule au 50 ml requis. Un jury sera chargé
                          d’élire le parfum gagnant.
                        </p>
                        <p>
                          L’équipe gagnante effectuera une présentation du
                          making off et marketing.
                        </p>
                      </div>
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.parfumDeux.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article>
                  <h3>ESCAPE GAME OUTDOOR</h3>
                  <p style={{ textAlign: "center" }}>
                    journée ou ½ journée Cannes, Nice, Antibes, Saint Paul de
                    Vence, Gourdon, Entrevaux et toute autre ville en France..
                  </p>
                  <div className="activities">
                    <div className="grid-article">
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.food.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                      <div className="activities__content">
                        <p>
                          Muni d’un sac à dos remplis d’enveloppes de missions
                          possibles, chaque équipe devra retrouver les indices
                          demandés au travers de l’histoire de la ville. Sur la
                          côte ou dans l’arrière pays, c’est la découverte de
                          l’histoire, des traditions, de la cuisine et de
                          l’artisanat.
                        </p>
                        <p>
                          Chaque indice permet de continuer la course en ouvrant
                          au fur et à mesure les enveloppes. Un urban game dont
                          le but de ces recherches est de retrouver le cadre du
                          logo de l’entreprise.
                        </p>
                      </div>
                    </div>
                    <div className="grid-article">
                      <div className="activities__content">
                        <p>
                          Pour retrouver ce logo, chaque équipe devra gagner des
                          indices :
                        </p>
                        <ul>
                          <li>- Retrouver des sites historiques</li> <br />
                          <li>
                            - Effectuer des missions (ateliers de senteurs,
                            trouver l’intrus, traditions)
                          </li>{" "}
                          <br />
                          <li>
                            - Résoudre les énigmes pour avancer dans la soif de
                            découverte
                          </li>{" "}
                          <br />
                          <li>
                            - Participer au fil rouge éliminatoire à travers des
                            selfies
                          </li>
                        </ul>
                      </div>
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.foodDeux.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article>
                  <h3>BEACH GAMES</h3>
                  <p style={{ textAlign: "center" }}>
                    30 à 400 participants pour ½ ou journée outdoor (Cannes,
                    Juan les Pins, St Laurent du Var, Antibes et le Var)
                  </p>
                  <div className="activities">
                    <div className="grid-article">
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.beach.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                      <div className="activities__content">
                        <p>
                          Les participants divisés en équipes s’affrontent en
                          duel sur chacune des épreuves sur le sable ou sur
                          l’eau.
                        </p>
                        <h4>Des jeux et ateliers tels que:</h4>
                        <p>
                          Sakaho - Le principe de ce jeu est simple, mais ses
                          ressorts en sont efficaces. Il s’agit pour les équipes
                          de remplir des poches d’eau et de se les passer en se
                          les envoyant d’assez loin.
                        </p>
                      </div>
                    </div>
                    <div className="grid-article">
                      <div className="activities__content">
                        <p>
                          Relais Kayak/Paddle - Un relais chronométré au départ
                          de la plage. 2 équipes vont devoir s’affronter à la
                          pagaie.
                        </p>
                        <p>
                          Radeau - Des radeaux à construire avec à votre
                          disposition un certain nombre de matériaux. …
                        </p>
                        <p>
                          HAKA – de vrais polynésiens pour une initiation aux
                          danses du Pacifique! Une chorégraphie finale avec tous
                          les participants pour une danse de folie!!
                        </p>
                        <p>
                          Création de cocktail, beach volley/foot volley, baby
                          foot gonflable…
                        </p>
                      </div>
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.beachDeux.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article>
                  <h3>TRAINING CAMP</h3>
                  <p style={{ textAlign: "center" }}>
                    journée ou ½ journée dans un parc naturel, une plage and
                    indoor ou outdoor
                  </p>
                  <div className="activities">
                    <div className="grid-article">
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.camp.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                      <div className="activities__content">
                        <p>
                          Découvrir un véritable ‘Training camp’ à la portée de
                          tous :
                        </p>
                        <ul>
                          <li>- Motivation par le sport</li>
                          <li>- Bien être par la relaxation et la danse</li>
                          <li>- Goût de l’effort par l’amusement</li>
                        </ul>

                        <p>
                          Profitez de cette activité lors d’un moment
                          inoubliable de façon ludique afin de renforcer les
                          liens entre les personnes travaillant en équipe.
                        </p>
                      </div>
                    </div>
                    <div className="grid-article">
                      <div className="activities__content">
                        <p>
                          Chacun va trouver les ressources nécessaires pour
                          arriver à réaliser ses objectifs en solo et en équipe.
                        </p>
                        <h4>Réalisation :</h4>
                        <p>
                          Une séance d’échauffement, des activités réparties en
                          « teams » sur 4 ateliers pour un final époustouflant
                          de dynamisme. - Haka, zen sports, pilates, zumba
                          academy, yoga
                        </p>
                      </div>
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.campDeux.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                    </div>
                  </div>
                </article>
                <article>
                  <h3>COMMANDO CAMP</h3>
                  <p style={{ textAlign: "center" }}>
                    journée ou ½ journée dans un parc naturel
                  </p>
                  <div className="activities">
                    <div className="grid-article">
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.commando.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                      <div className="activities__content">
                        <p>
                          Entrainement façon ‘commando’ pour ceux qui désirent
                          exprimer leur talent de sportif et de combattant.
                          <br />
                          Le camp est une méthode de conditionnement physique
                          employée par l’armée américaine « Faster, stronger,
                          better ».
                        </p>

                        <p>
                          Profitez de cette activité lors d’un moment
                          inoubliable de façon ludique afin de renforcer les
                          liens entre les personnes travaillant en équipe.
                        </p>
                      </div>
                    </div>
                    <div className="grid-article">
                      <div className="activities__content">
                        <p>
                          Véritable dynamique de groupe qui va pousser tous les
                          participants à persévérer dans l’effort : motivation,
                          goût de l’effort, dépassement de soi, rigueur, ordre
                          et entraide.
                        </p>
                        <h4>Réalisation :</h4>
                        <p>
                          Le cours commence par un échauffement puis
                          s’enchaineront les challenges en solo et en équipes.
                          Le tout dans la rigueur et la sécurité encadré par des
                          professionnels.
                        </p>
                      </div>
                      <div className="activities__image">
                        <Img
                          style={{ width: "90%" }}
                          fluid={data.commandoDeux.childImageSharp.fluid}
                          alt="awesome landscape"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </Card>
            </section>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    teambuildingBcg: file(relativePath: { eq: "painting.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    parfum: file(relativePath: { eq: "parfum.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    parfumDeux: file(relativePath: { eq: "parfum2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    food: file(relativePath: { eq: "food.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    foodDeux: file(relativePath: { eq: "food2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    beach: file(relativePath: { eq: "beach.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    beachDeux: file(relativePath: { eq: "beach2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    camp: file(relativePath: { eq: "camp.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    campDeux: file(relativePath: { eq: "camp2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    commando: file(relativePath: { eq: "commando.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    commandoDeux: file(relativePath: { eq: "commando2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
