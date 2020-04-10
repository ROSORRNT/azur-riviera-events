import React from "react"
import { graphql } from "gatsby"
import Lay from "../components/Lay"
import styles from "../components/css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import MainNavigation from "../components/Navigation/MainNavigation"
import Card from "../components/UIElements/Card"

const Blog = ({ data }) => {
  const {
    title,
    published,
    postContent: { json },
  } = data.new
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <img width="700" src={node.data.target.fields.file["en-US"].url} />
        )
      },
      // "embedded-entry-block": node => {
      //   const { title, images, description } = node.data.target.fields
      //   return (
      //     <div>
      //       <br />
      //       <br />
      //       <br />
      //       <br />
      //       <h1>Mon autre poste : {title["en-US"]}</h1>
      //       <br />
      //       <br />
      //       <br />
      //       <br />
      //     </div>
      //   )
      // },
    },
  }

  return (
    <Lay>
      <MainNavigation />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>Publié le : {published} </h4>
          <article className={styles.post}>
            <Card style={{ background: "#fdfde1" }}>
              {documentToReactComponents(json, options)}
            </Card>
          </article>
          <AniLink fade to="/news" className="btn-primary">
            Actualites
          </AniLink>
        </div>
      </section>
    </Lay>
  )
}

export const query = graphql`
  query getBlog($slug: String!) {
    new: contentfulBlog(slug: { eq: $slug }) {
      title
      published(formatString: "DD-MM-YYYY")
      keywords
      postContent {
        json
      }
    }
  }
`

export default Blog
