import React from "react"
import { Link } from "gatsby"

import MainNavigation from "../components/Navigation/MainNavigation"
import SideNavigation from "../components/Navigation/SideNavigation"
import Banner from "../components/UIElements/Banner"
import StyledHero from "../components/UIElements/StyledHero"
import Card from "../components/UIElements/Card"

export default ({ data }) => {
  const anchorLinksList = (
    <React.Fragment>
      <li>
        <Link to="/teambuilding#sport-culture">Sport et Culture</Link>
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
  }
`
