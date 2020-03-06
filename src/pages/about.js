import React from "react"
import MainNavigation from "../components/Navigation/MainNavigation"

const about = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <section className="container">
        <h1>NOS POINTS FORTS</h1>
        <hr />
        <h2>Confiez nous vos rêves, nous saurons les réaliser!</h2>
        <ul>
          <li> - Structure à taille humaine</li>
          <br />
          <li> - Maîtrise de la prestation tout au long de l’évènement</li>
          <br />
          <li> - Expertise opérationnelle</li>
          <br />
          <li> - Créativité, synergie, réactivité et adaptation</li>
          <br />
          <li> - Interlocuteur unique entouré d’une équipe dédiée</li>
          <br />
          <li> - Coûts et délais respectés</li>
        </ul>
      </section>
    </React.Fragment>
  )
}

export default about
