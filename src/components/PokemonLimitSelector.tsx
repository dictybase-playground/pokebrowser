import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useAtom } from "jotai"
import { pokemonLimitAtom, pokemonLimitOptions } from "../context/AtomConfigs"

const PokemonLimitSelector = () => {
  const [limit, setLimit] = useAtom(pokemonLimitAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setLimit(event.target.value)
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

export default PokemonLimitSelector
