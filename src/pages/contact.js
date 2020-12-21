import React from "react"
import Layout from "../components/layout"
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact page</h1>
      <p>Email</p>
      <p>
        <a href="https://github.com/pedro-git-projects">Github</a>
      </p>
    </Layout>
  )
}

export default ContactPage
