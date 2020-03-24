import React, { Component } from "react"
import styles from "../css/items.module.css"
import Post from "./Post"
import Title from "../UIElements/Title"

export default class PostList extends Component {
  state = {
    posts: [],
    sortedPosts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.posts.edges,
      sortedPosts: this.props.posts.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Nos" subtitle="articles" />
        <div className={styles.center}>
          {this.state.sortedPosts.map(({ node }) => {
            return (
              <Post
                key={node.contentful_id}
                post={node}
                showDescription={this.props.showDescription}
              />
            )
          })}
        </div>
      </section>
    )
  }
}
