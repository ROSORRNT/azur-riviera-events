// import React from "react"
// import PostList from "./PostList"
// import { useStaticQuery, graphql } from "gatsby"

// const getPosts = graphql`
//   query {
//     posts: allContentfulPost {
//       edges {
//         node {
//           contentful_id
//           title
//           date
//           keywords
//           description
//           slug
//           pictures {
//             fluid {
//               ...GatsbyContentfulFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const Posts = ({ showDescription }) => {
//   const { posts } = useStaticQuery(getPosts)

//   return <PostList posts={posts} showDescription={showDescription} />
// }

// export default Posts
