import React from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import Apollo from "@apollo/client"

interface QuerySelectorProps {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

// interface QueryHookMap {
//   [index: string]: (baseOptions: Apollo.QueryHookOptions) => Apollo.QueryResult
// }

export const QuerySelector = ({ query, setQuery }: QuerySelectorProps) => {
  const handleQueryChange = (e: SelectChangeEvent<string>): void => {
    setQuery(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="query-select-label">query</InputLabel>
      <Select
        labelId="query-select-label"
        id="query-select"
        label="Query"
        value={query}
        onChange={handleQueryChange}>
        {Object.keys(PokemonTypeMap).map((key) => (
          <MenuItem value={PokemonTypeMap[key]}>{PokemonTypeMap[key]}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
