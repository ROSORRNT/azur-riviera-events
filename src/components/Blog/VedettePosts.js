import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../UIElements/Title"
import styles from "../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../css/layout.css"

const getNews = graphql`
  query {
    news: allContentfulBlog(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          published(formatString: "DD-MM-YYYY")
          slug
          contentful_id
          keywords
          description
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const VedettePosts = () => {
  const response = useStaticQuery(getNews)
  const posts = response.news.edges

  return (
    <section className={styles.posts}>
      <Title title="Dernieres" subtitle="actualites" />
      <div className={styles.center}>
        {posts.slice(0, 2).map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>
      <AniLink fade to="/news" className="btn-primary">
        Actualites
      </AniLink>
    </section>
  )
}

export default VedettePosts
