import React from "react"
import { Link } from "gatsby"
import { FaRProject } from "react-icons/fa"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"
import styles from "../css/footer.module.css"
import "../UIElements/Contact.css"

const NewFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridFooter}>
        <section>
          <div className={styles.links}>
            {links.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  {item.text}
                </Link>
              )
            })}
          </div>
          <div className={styles.icons}>
            {socialIcons.map((item, index) => {
              return (
                <a key={index} href={item.url} target="_blank">
                  {item.icon}
                </a>
              )
            })}
          </div>
          <div className={styles.copyright}>
            Copyright Azur Riviera Prestations 2020®
          </div>
        </section>
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
        <section>
          <div className="center">
            <h3>NEWSLETTER</h3>
            <form
              action="https://formspree.io/romainsorrnti@gmail.com"
              method="POST"
              className="center"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Jean Paulhan"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="exemple@exemple.com"
                />
              </div>

              <div>
                <input type="submit" value="envoyer" className="submit" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default NewFooter
