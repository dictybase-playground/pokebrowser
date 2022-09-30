import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useAtom } from "jotai"
import { pokemonTypeAtom, pokemonTypeOptions } from "context/AtomConfigs"

const PokemonTypeSelector = () => {
  const [type, setType] = useAtom(pokemonTypeAtom)

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        label="type"
        value={type}
        onChange={handleChange}>
        {pokemonTypeOptions.map((option) => (
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

export default PokemonTypeSelector
