import React from 'react'
import Layout from './Components/L/Layout'
import BlogMainPage from './Components/B/BlogMainPage'
import BlogPostSec from './Components/B/BlogPostSec'

const BlogPage = () => {
  return (
    <Layout>
      <BlogMainPage />
      <BlogPostSec />
    </Layout>
  )
}

export default BlogPage
