import React, { useState, useEffect } from "react"
import Card from "./card"
import csvtojson from "csvtojson"
import ChartistGraph from "react-chartist"
import { Link } from "gatsby"

const CardMosaic = ({ search }) => {
  const [cards, setCards] = useState([])
  const [state, setState] = useState({ population: 1 })

  useEffect(() => {
    const searchParams = new URLSearchParams(search.split("?")[1])
    const region = searchParams.get("region")
    const subregion = searchParams.get("subregion")
    const filename = searchParams.get("filename")
    const population = searchParams.get("population")
    const employed_percent = searchParams.get("employed_percent")

    setState(s => ({ ...s, population, region, subregion, employed_percent }))
    fetch(`/data/${region}/${filename}`)
      .then(response => response.text())
      .then(csv => csvtojson().fromString(csv))
      .then(json => setCards(json))
  }, [search])

  useEffect(() => {
    let total = 0
    setState(s => ({
      ...s,
      labels: cards.map((_, i) => i),
      series: [
        cards.map(card =>
          card.layoffs >= 0 ? (total += parseInt(card.layoffs, 10)) : 0
        ),
      ],
    }))
  }, [cards])

  return (
    <div
      style={{
        padding: "1em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <Link to={`/`}>Home</Link>
        {" > " + state.region + " > " + state.subregion}
      </div>
      {state.series && (
        <ChartistGraph
          data={{
            labels: state.labels,
            series: state.series,
          }}
          options={{ low: 0, showArea: false }}
          type={"Line"}
        />
      )}
      <div
        style={{
          padding: "1em",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {cards.map(card => (
          <Card key={card.name} {...card} {...state} />
        ))}
      </div>
    </div>
  )
}

export default CardMosaic
