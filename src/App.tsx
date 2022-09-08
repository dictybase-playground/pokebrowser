import React, { useEffect, useState } from "react"
import {
  Container,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useGetAllPokemonQuery } from "./generated/graphql"
import { QuerySelection } from "./components/QuerySelection"
import { QueryResultList } from "./components/QueryResultList"

const App = (): React.ReactElement => {
  const [limit, setLimit] = useState("60")
  const [queryData, setQueryData] = useState({})
  const [selectedQueryHook, setSelectedQueryHook] = useState(
    () => useGetAllPokemonQuery,
  )

  const { data, loading, error } = selectedQueryHook({
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
      <QuerySelection />
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
      {loading ? (
        "Loading..."
      ) : error ? (
        error.message
      ) : (
        <QueryResultList data={data} />
      )}
    </Container>
  )
}

export default App
