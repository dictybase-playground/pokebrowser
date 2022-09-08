import React, { useEffect, useState } from "react"
import {
  Container,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material"
import { useGetAllPokemonLazyQuery } from "./generated/graphql"
import { PokemonQuery } from "./components/PokemonQuery"

const App = (): React.ReactElement => {
  const [limit, setLimit] = useState("60")
  const [queryData, setQueryData] = useState({})
  const [selectedQueryHook, setSelectedQueryHook] = useState(
    () => useGetAllPokemonLazyQuery,
  )

  const [getPokemon, { data, loading, error }] = selectedQueryHook({
    variables: { limit: parseInt(limit) },
  })

  const handleClick = (e: React.MouseEvent): void => {}

  const handleChange = (e: SelectChangeEvent<string>): void => {
    setLimit(e.target.value)
  }

  return (
    <Container className="App">
      <h1> Pokebrowser </h1>
      {/* <QuerySelection /> */}
      <Button> Run Query </Button>
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
      <br />
      <PokemonQuery limit={parseInt(limit)} />
    </Container>
  )
}

export default App
