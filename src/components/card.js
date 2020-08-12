import React from "react"

const Card = ({
  name,
  website,
  employees,
  status,
  population,
  layoffs,
  employed_percent,
}) => {
  const percentOfPop =
    layoffs > 0
      ? (
          (parseInt(layoffs, 10) /
            ((parseInt(population, 10) * parseInt(employed_percent, 10)) /
              100)) *
          100
        ).toFixed(5)
      : 0
  return (
    <div
      style={{
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        border: "1px solid black",
        margin: "1em",
      }}
    >
      <h3>{name}</h3>
      <a href={website}>Company Site</a>
      <p>Status: {status}</p>
      <p>Number of Employees: {employees >= 0 ? employees : "Not available"}</p>
      <p>Layoffs: {layoffs >= 0 ? layoffs : "Not available"}</p>
      <p>Percent of Employed Pop: {percentOfPop}</p>
    </div>
  )
}

export default Card
