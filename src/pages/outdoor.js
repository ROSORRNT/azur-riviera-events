import React from "react"
import { Link } from "gatsby"

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
        <Link to="/outdoor#naturels-jardins">Naturels, Jardins</Link>
      </li>
      <li>
        <Link to="/outdoor#vtt-rally-regate">VTT, Rally, Régate</Link>
      </li>
      <li>
        <Link to="/outdoor#canyonning">Canyonning, Rafting, Parapente</Link>
      </li>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <MainNavigation className="main-header" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Voyage et Découvertes"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, corrupti?"
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

            <article id="randonees-parcs">
              <h1>Randonnées - Parcs</h1>
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
            <article id="naturels-jardins">
              <h1>Naturels, Jardins</h1>
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
            <article id="vtt-rally-regate">
              <h1>VTT, Rally, Régate </h1>
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
            <article id="canyonning">
              <h1>Canyonning, Rafting et Parapente</h1>
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
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
