import React from "react"
import { Link } from "gatsby"

import "./Footer.css"
import {
  FaRegNewspaper,
  FaHotjar,
  FaMailBulk,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="foot-wrapper">
        <section>
          <nav>
            {/* <h3 style={{ textAlign: "center" }}>Articles Récents</h3> */}
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

              <li className="main-footer__link">
                Copyright Azur Riviera Prestations 2020®
              </li>
            </ul>
          </nav>
        </section>
        <section>
          {/* <h3 style={{ textAlign: "center" }}>
            Inscrivez-vous à notre Newsletter
          </h3> */}
        </section>
        <section>
          <nav>
            {/* <h3 style={{ textAlign: "center" }}>AZUR RIVIERA EVENTS</h3> */}
            <ul className="main-footer__links">
              <li className="main-footer__link">
                <FaFacebookSquare />{" "}
                <a href="https://www.facebook.com/azur.rivieraevents"></a>
              </li>
              <li className="main-footer__link">
                <FaLinkedin /> <a href="#"></a>
              </li>{" "}
              <li style={{ paddingTop: ".8rem" }} className="main-footer__link">
                Tél : ++ 33 6 60 61 33 99 <br /> Mail :
                patricia@azur-riviera-events.com
              </li>
              <li className="main-footer__link">
                {" "}
                Patricia Le Bras 45, chemin Collet Baraya 06670 COLOMARS
              </li>
              <li className="main-footer__link">
                <FaRegNewspaper /> <Link to="/news">News</Link>{" "}
              </li>
              <li className="main-footer__link">
                <FaHotjar /> <Link to="/about">Points Forts</Link>
              </li>
              <li className="main-footer__link">
                <FaMailBulk /> <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  )
}

export default Footer
