import React from "react"
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"

interface SelectorProps {
  label: string
  value: string
  options: string[]
  handleChange: (e: SelectChangeEvent<string>) => void
}

export const Selector = ({
  label,
  value,
  options,
  handleChange,
}: SelectorProps) => {
  return (
    <FormControl>
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        label={label}
        value={value}
        onChange={handleChange}>
        {options.map((option) => (
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
