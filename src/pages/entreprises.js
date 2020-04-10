import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  FaHandsHelping,
  FaGlobeAmericas,
  FaCommentDots,
  FaArrowAltCircleRight,
} from "react-icons/fa"

import MainNavigation from "../components/Navigation/MainNavigation"
import SideNavigation from "../components/Navigation/SideNavigation"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import Card from "../components/UIElements/Card"

export default ({ data }) => {
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/entreprises#seminaires">Séminaire</Link>
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
          title="evenements d'entreprise"
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
              <p>Un interlocuteur unique pour :</p>
              <p>
                <FaHandsHelping /> Vous conseiller et vous accompagner dans
                l’organisation de vos séminaires, conférences de la conception à
                la réalisation
              </p>
              <p>
                <FaGlobeAmericas /> Vous préparer un programme sur mesure pour
                vos voyages d’affaire en France et à l’étranger
              </p>
              <p>
                <FaCommentDots /> Vous assister pour mettre en place votre
                communication digitale et donner du sens à votre événement. .
                Pour plus d'infos{" "}
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
                      {" "}
                      <strong>
                        {" "}
                        Les ingrédients d’un séminaire réussi
                      </strong>{" "}
                    </h3>
                    <h4 style={{ textAlign: "center" }}>
                      {" "}
                      <FaArrowAltCircleRight /> Lieux, choix des prestataires,
                      déroulé et logistique, accompagnement{" "}
                    </h4>
                    <p>
                      Nous sommes auprès de<strong> nos clients</strong> pour{" "}
                      <strong>
                        créer, concevoir et coordonner leur séminaire
                        d’entreprise.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Conseils dans le choix du lieu en fonction de vos budgets
                      et objectifs.
                      <br />
                      <strong> Ensemble</strong>, nous préparons un planning de
                      tâches et établissons un cahier des charges.{" "}
                      <strong> Suivi et interlocuteur unique</strong> pour vous
                      assister tout au long de la préparation et être à vos
                      côtés le jour J.
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
                      {" "}
                      <strong>
                        {" "}
                        Les ingrédients d’une conférence réussie
                      </strong>{" "}
                    </h3>
                    <h4 style={{ textAlign: "justify" }}>
                      {" "}
                      <FaArrowAltCircleRight /> Excellente connaissance des
                      espaces de congrès sur la Côte d’Azur, choix du lieu et
                      des prestataires en concordance avec le projet et la
                      thématique, logistique transport et hébergement, gestion
                      des participants et communication{" "}
                    </h4>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Nous vous apportons notre expertise dans l’organisation de
                      conférence pour{" "}
                      <strong>
                        {" "}
                        respecter votre budget, vos contraintes géographiques,
                        la gestion de vos invités pour leur déplacement et leur
                        accueil.
                      </strong>
                    </p>
                    <p>
                      Pour tous les congrès organisés sur Nice, Cannes, Monaco…
                      nous pouvons vous aider dans la{" "}
                      <strong>
                        réservation d’hôtels, villas, yacht, traiteurs et
                        espaces de réceptions et toujours notre assistance pour
                        la logistique.
                      </strong>
                    </p>
                    <p>
                      <strong> Suivi et interlocuteur unique </strong> pour vous
                      assister tout au long de la préparation et être à vos
                      côtés le jour J.
                    </p>
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
                      fluid={data.commOne.childImageSharp.fluid}
                      alt="awesome landscape"
                    />{" "}
                  </div>
                  <div>
                    <h4 style={{ textAlign: "center" }}>
                      Grâce à la personnalisation de nos produits, nous mettons
                      le digital au cœur de votre événement avec nos outils de
                      communication globale.
                    </h4>
                    <p>
                      A partir de la gestion de votre événement professionnel,
                      nous évaluons ensemble vos besoins en supports de
                      communication digitaux et graphiques, et nous associons à
                      la création de votre concept :
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <ul className="page--list">
                      <li>
                        - Plateforme de gestion des participants et site
                        internet dédié sécurisant les données
                      </li>
                      <li>
                        - Création et impression des cartons d’invitation,
                        flyers, signalétique, badges électroniques
                      </li>
                      <li>
                        - Animation des réseaux sociaux, relation presse,
                        contenus{" "}
                      </li>
                      <li>- Conception graphique, scénographie</li>
                      <li>- Coordinateur sur place pour la logistique</li>
                    </ul>
                  </div>
                  <div className="activities__image">
                    <Img
                      style={{ width: "90%" }}
                      fluid={data.commTwo.childImageSharp.fluid}
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
                    <h4 style={{ textAlign: "center" }}>
                      De la conception à la réalisation de vos événements et
                      voyage au sein de votre entreprise.{" "}
                    </h4>
                    <p>
                      Nous vous apportons nos idées et concepts pour que les
                      salariés de votre entreprise puissent bénéficier
                      d’activités originales, éthiques et en respect avec vos
                      valeurs sociétales.
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <p>
                      Organisation d’ arbre de Noël et dîner de gala, départ
                      retraites, récompenses, célébration, voyage de fin
                      d’année…, nous créerons ensemble un événement festif
                      unique, sur mesure et inoubliable.
                    </p>
                    <p>
                      <strong> Suivi et interlocuteur unique </strong> pour vous
                      assister tout au long de la préparation et être à vos
                      côtés le jour J.
                    </p>
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
                    <h4 style={{ textAlign: "center" }}>
                      Organisation de tous types de déplacements.{" "}
                    </h4>
                    <p>
                      Pour optimiser vos coûts de déplacements,{" "}
                      <strong>
                        {" "}
                        nous avons sélectionné des prestaires fiables avec un
                        service personnalisé garantissant des critères de
                        sécurité.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="grid-article">
                  <div>
                    <ul style={{ lineHeight: "1.5rem" }}>
                      <li>
                        -{" "}
                        <strong>
                          Voiture avec chauffeur jusqu’à 8 personnes
                        </strong>
                      </li>
                      <li>
                        - <strong>Autocars de tourisme</strong>
                      </li>
                      <li>
                        - <strong>Hélicoptère ou avion privé</strong>
                      </li>
                      <li>
                        -{" "}
                        <strong>
                          Yacht, voilier pour vos loisirs ou vos rendez-vous
                          professionnels
                        </strong>
                      </li>
                    </ul>
                    <p>
                      <strong> Suivi et interlocuteur unique </strong> pour vous
                      assister tout au long de la préparation et être à vos
                      côtés le jour J.
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
    commOne: file(relativePath: { eq: "comm0.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    commTwo: file(relativePath: { eq: "comm1.jpg" }) {
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
    comiteEntreprise: file(relativePath: { eq: "newComite.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    comiteEntrepriseTwo: file(relativePath: { eq: "newComiteTwo.jpg" }) {
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
