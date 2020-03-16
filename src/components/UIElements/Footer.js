import React from "react"
import { Link } from "gatsby"
import { FaRProject } from "react-icons/fa"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"
import styles from "../css/footer.module.css"
import "../UIElements/Contact.css"

const Footer = ({ children }) => {
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
        {children}
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

export default Footer
