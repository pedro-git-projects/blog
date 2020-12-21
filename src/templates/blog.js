import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug:{eq: $slug}){
    title
    publishDate(formatString:"MMMM Do, YYYY") 
    body{
      json
    }
  }
}`

const Blog = (props) => {
  return (
  <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
  </Layout>
  )
}

export default Blog;