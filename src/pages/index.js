import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import ChartistGraph from "react-chartist"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [dataset, setDatasets] = useState({})

  useEffect(() => {
    fetch("/data/data-files.json")
      .then(response => response.json())
      .then(json => setDatasets(json))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {Object.keys(dataset).map(region => {
          return (
            <div
              key={region}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              {region}
              <div
                style={{
                  marginLeft: "2rem",
                }}
              >
                {">"}
                {Object.keys(dataset[region]).map(subregion => {
                  return (
                    <Link
                      key={subregion}
                      to={`/region/?region=${region}&subregion=${subregion}&filename=${dataset[region][subregion].filename}&population=${dataset[region][subregion].population}&employed_percent=${dataset[region][subregion].employed_percent}`}
                    >
                      {subregion}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
