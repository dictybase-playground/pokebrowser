import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useAtom } from "jotai"
import { pokemonLimitAtom, limitOptions } from "../context/ArgumentsProvider"

export const LimitSelector = () => {
  const [limit, setLimit] = useAtom(pokemonLimitAtom)

  const handleChange = (e: SelectChangeEvent) => {
    setLimit(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel id={`$limit-select-label`}>Limit</InputLabel>
      <Select
        labelId={`$limit-select-label`}
        id={`$limit-select`}
        label="limit"
        value={limit}
        onChange={handleChange}>
        {limitOptions.map((option) => (
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
