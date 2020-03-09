import React from "react"
import { Link } from "gatsby"
import { FaRProject } from "react-icons/fa"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"
import styles from "../css/footer.module.css"
import Contact from "../FormElements/Contact"

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
          {/* <div className={styles.newsletter}>
            <Contact />
          </div> */}
        </section>
      </div>
    </footer>
  )
}

export default NewFooter
