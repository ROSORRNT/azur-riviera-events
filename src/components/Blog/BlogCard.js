import React from "react"
import styles from "../css/blog-card.module.css"
import { FaMap } from "react-icons/fa"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { title, images, published, slug, keywords, description } = blog
  console.log(images)
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={images[0].fluid}
          className={styles.img}
          alt="single post"
        />
        <AniLink fade className={styles.link} to={`/news/${slug}`}>
          Lire plus
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
        <h4 className={styles.country}>
          <FaMap className={styles.icon} />
          {keywords}
        </h4>
      </div>
      <p className={styles.description}>
        {description}{" "}
        <span>
          <AniLink
            style={{ textDecoration: "none", color: "var(--primaryBlue)" }}
            fade
            to={`/news/${slug}`}
          >
            Lire plus
          </AniLink>
        </span>
      </p>
    </article>
  )
}

export default BlogCard
