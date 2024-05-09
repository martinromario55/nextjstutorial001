import React from 'react'
import styles from './blog.module.css'
import PostCard from '../../components/postCard/postCard'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <PostCard post="posts" />
    </div>
  )
}

export default BlogPage
