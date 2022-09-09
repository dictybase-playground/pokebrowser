import React, { useState } from "react"
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"

interface SelectorProps {
  initialValue: string
  values: string[]
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

// interface PokemonTypeMap {
//   [index: string]: string
// }

// const PokemonTypeMap: PokemonTypeMap = {
//   NORMAL: "normal",
//   FIGHTING: "fighting",
//   FLYING: "flying",
//   POISON: "poison",
//   GROUND: "ground",
//   ROCK: "rock",
//   BUG: "bug",
//   GHOST: "ghost",
//   STEEL: "steel",
//   FIRE: "fire",
//   WATER: "water",
//   GRASS: "grass",
//   ELECTRIC: "electric",
//   PSYCHIC: "psychic",
//   ICE: "ice",
//   DRAGON: "dragon",
//   DARK: "dark",
//   FAIRY: "fairy",
// }

export const Selector = ({
  values,
  initialValue,
  setSelected,
}: SelectorProps) => {
  const [currentValue, setCurrentValue] = useState(initialValue)

  const handleChange = (e: SelectChangeEvent<string>): void => {
    setSelected(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        label="Type"
        value={currentValue}
        onChange={handleChange}>
        {values.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
