// import React from "react"

// import Image from "gatsby-image"
// import { FaMap } from "react-icons/fa"
// import styles from "../css/post.module.css"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// import PropTypes from "prop-types"

// const Post = props => {
//   let content
//   if (props.post !== undefined) {
//     const { title, date, keywords, pictures, description, slug } = props.post

//     let mainImage = pictures[0].fluid

//     content = (
//       <React.Fragment>
//         <div className={styles.imgContainer}>
//           <Image fluid={mainImage} className={styles.img} alt="single post" />
//           <AniLink fade className={styles.link} to={`/news/${slug}`}>
//             Lire plus
//           </AniLink>
//         </div>
//         <div className={styles.footer}>
//           <h3>{title}</h3>
//           <div className={styles.info}>
//             <h4 className={styles.country}>
//               <FaMap className={styles.icon} />
//               {keywords}
//             </h4>
//             <div className={styles.details}>
//               <h6>Publié le {date.slice(0, 7)}</h6>
//             </div>
//           </div>
//         </div>
//         {props.showDescription && (
//           <p className={styles.description}>
//             {description}{" "}
//             <span>
//               <AniLink
//                 style={{ textDecoration: "none", color: "var(--primaryBlue)" }}
//                 fade
//                 to={`/news/${slug}`}
//               >
//                 Lire plus
//               </AniLink>
//             </span>
//           </p>
//         )}
//       </React.Fragment>
//     )
//   }

//   return (
//     <article className={styles.post}>
//       {content !== undefined && content}
//     </article>
//   )
// }

// Post.propTypes = {
//   post: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     keywords: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
//     date: PropTypes.string.isRequired,
//   }),
// }

// export default Post
