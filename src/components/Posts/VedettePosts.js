import React from "react"
import Post from "./Post"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../UIElements/Title"
import styles from "../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/layout.css"

const getPosts = graphql`
  query {
    vedettePosts: allContentfulPost(filter: { vedette: { eq: true } }) {
      edges {
        node {
          contentful_id
          title
          date
          keywords
          description
          slug
          pictures {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const VedettePosts = ({ showDescription }) => {
  const response = useStaticQuery(getPosts)
  const posts = response.vedettePosts.edges
  // retry
  return (
    <section className={styles.posts}>
      <Title title="Articles" subtitle="en vedette" />
      <div className={styles.center}>
        {posts.map(({ node }) => {
          console.log(node)
          return <Post key={node.contentful_id} post={node} />
        })}
        <Post showDescription={showDescription} />
      </div>
      <AniLink fade to="/news" className="btn-primary">
        Les news
      </AniLink>
    </section>
  )
}

export default VedettePosts
