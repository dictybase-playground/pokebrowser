import { useEffect, useState } from "react"
import {
  Container,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useGetAllPokemonQuery } from "./generated/graphql"

function App() {
  const [limit, setLimit] = useState("60")
  const { data } = useGetAllPokemonQuery({
    variables: { limit: parseInt(limit) },
  })

  useEffect(() => {
    console.log(data)
  })

  const handleChange = (e: SelectChangeEvent<string>) => {
    setLimit(e.target.value)
  }

  return (
    <Container className="App">
      <h1> Pokebrowser </h1>
      <FormControl>
        <InputLabel id="limit-select-label">Limit</InputLabel>
        <Select
          labelId="limit-select-label"
          id="limit-select"
          label="limit"
          value={limit}
          onChange={handleChange}>
          <MenuItem value={60}>60</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={120}>120</MenuItem>
          <MenuItem value={150}>150</MenuItem>
        </Select>
      </FormControl>
      <ul>
        {data?.pokemon_v2_pokemon.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name}</li>
        })}
      </ul>
    </Container>
  )
}

export default App
