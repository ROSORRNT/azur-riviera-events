const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      news: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.news.edges.forEach(({ node }) => {
    createPage({
      path: `news/${node.slug}`,
      component: path.resolve("./src/template/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
