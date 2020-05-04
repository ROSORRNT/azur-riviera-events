import React from "react"

import styles from "./../css/contact.module.css"
import "../UIElements/Contact.css"

const Devis = ({ children }) => {
  return (
    <section>
      {children}
      <div style={{ marginTop: "1rem" }} className={styles.center}>
        <form
          action="https://formspree.io/lebras.patricia@gmail.com"
          method="POST"
          className={styles.center}
        >
          <div>
            <input
              type="text"
              name="organisme"
              id="organisme"
              className={styles.formControl}
              placeholder="Organisme"
            />
          </div>
          <div>
            <input
              type="text"
              name="nom"
              id="nom"
              className={styles.formControl}
              placeholder="Nom"
            />
          </div>
          <div>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className={styles.formControl}
              placeholder="Prénom"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              name="telephone"
              id="telephone"
              className={styles.formControl}
              placeholder="Téléphone"
            />
          </div>
          <div>
            <input
              type="text"
              name="date"
              id="date"
              className={styles.formControl}
              placeholder="Date"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Type de projet :
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Votre projet..."
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="envoyer" className="submit" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Devis
