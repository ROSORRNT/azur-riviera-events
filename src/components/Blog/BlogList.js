import React from "react"
import BlogCard from "./BlogCard"
import Title from "../UIElements/Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../css/blog.module.css"

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
const BlogList = () => {
  const { news } = useStaticQuery(getNews)

  return (
    <section className={styles.blog}>
      <Title title="nos" subtitle="actualites" />
      <div className={styles.center}>
        {news.edges.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
