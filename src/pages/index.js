import React from "react";
import Layout from '../components/layout';
import Head from '../components/head';
import TextLoop from 'react-text-loop';

const IndexPage = () => {
  return(
    <Layout>
      <Head title="Home"/>
      <h1>Hello.</h1>
      <h2>I'm Pedro,&nbsp;
        <TextLoop>
            <span> developer.</span>
            <span> logician.</span>
            <span> philosopher.</span>
            </TextLoop>  
            </h2>    
    </Layout>
  )
}

export default IndexPage;