import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1><Link to="/"> Welcome Gatsby</Link></h1>
    
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
   
  </Layout>
)

export default IndexPage
