import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardMosaic from "../components/card-mosaic"

const IndexPage = ({ location: { search } }) => (
  <Layout>
    <SEO title="Home" />
    <CardMosaic search={search} />
  </Layout>
)

export default IndexPage
