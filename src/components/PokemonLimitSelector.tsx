import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useAtom } from "jotai"
import { pokemonLimitAtom, pokemonLimitOptions } from "../context/AtomConfigs"

export const PokemonLimitSelector = () => {
  const [limit, setLimit] = useAtom(pokemonLimitAtom)

  const handleChange = (e: SelectChangeEvent) => {
    setLimit(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="limit-select-label">Limit</InputLabel>
      <Select
        labelId="limit-select-label"
        id="limit-select"
        label="limit"
        value={limit}
        onChange={handleChange}>
        {pokemonLimitOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
