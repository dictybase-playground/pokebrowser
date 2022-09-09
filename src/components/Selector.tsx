import React, { useState } from "react"
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"

interface SelectorProps {
  label: string
  initialValue: string
  values: string[]
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const Selector = ({
  label,
  values,
  initialValue,
  setSelected,
}: SelectorProps) => {
  const [currentValue, setCurrentValue] = useState(initialValue)

  const handleChange = (e: SelectChangeEvent<string>): void => {
    setCurrentValue(e.target.value) //keeping its own current value state is probably redundant
    setSelected(e.target.value)
  }

  return (
    <FormControl>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        label={label}
        value={currentValue}
        onChange={handleChange}>
        {values.map((value) => (
          <MenuItem value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
