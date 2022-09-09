import React, { useState } from "react"
import { Container } from "@mui/material"
import { PokemonQuery } from "./components/PokemonQuery"
import { Selector } from "./components/Selector"

const pokemonTypes: Array<string> = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
]

const limits: Array<string> = ["60", "90", "120", "150"]

const App = (): React.ReactElement => {
  const [limit, setLimit] = useState("60")
  const [type, setType] = useState("")

  return (
    <Container className="App">
      <h1> Pokebrowser </h1>
      <Selector
        label="Limit"
        values={limits}
        initialValue={limits[0]}
        setSelected={setLimit}
      />
      <Selector
        label="Type"
        values={pokemonTypes}
        initialValue={pokemonTypes[0]}
        setSelected={setType}
      />
      <br />
      <PokemonQuery limit={limit} />
    </Container>
  )
}

export default App
