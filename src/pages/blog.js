import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from 'gatsby';
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulBlogPost(
      sort:{
        fields: publishDate,
        order: DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `)  
  
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge)=>{
          return(
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
