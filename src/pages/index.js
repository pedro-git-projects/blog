import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import TextLoop from "react-text-loop"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      
      <h1>Pedro Martins, <br/>
            <TextLoop>
            <span> Developer.</span>
            <span> Logician.</span>
            <span> Philosopher.</span>
            </TextLoop>
        </h1>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
