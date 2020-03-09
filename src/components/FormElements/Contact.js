import React from "react"

import styles from "./../css/contact.module.css"

const Contact = ({ children }) => {
  return (
    <section>
      {children && children}
      <div className={styles.center}>
        <form
          action="https://formspree.io/romainsorrnti@gmail.com"
          method="POST"
          className={styles.center}
        >
          <div>
            <label className={styles.label} htmlFor="name">
              Nom et prénom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Vos nom et prénom"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="email">
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Votre adresse mail"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Votre message"
              className={styles.formControl}
            />
          </div>
          <div>
            <input type="submit" value="envoyer" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
