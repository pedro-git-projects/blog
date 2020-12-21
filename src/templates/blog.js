import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'

/* export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter{
      title
      date
    }
    html
  }
}
` */ 

export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug:{eq: $slug}){
    title
    publishDate(formatString:"MMMM Do, YYYY") 
  }
}`

const Blog = (props) => {
  return (
  <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
  </Layout>
  )
}

export default Blog;