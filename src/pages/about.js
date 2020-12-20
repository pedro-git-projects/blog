import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage = () => {  
  return (
    <Layout>
      <h1>About</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nesciunt, exercitationem reiciendis culpa error iste dolore hic vel inventore. Similique.</p>      
      <Link to="/contact">Contact me.</Link>
    </Layout>
  )
}

export default AboutPage
