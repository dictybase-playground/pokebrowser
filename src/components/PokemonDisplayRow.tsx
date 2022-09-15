import { TableRow, TableCell } from "@mui/material"
import { Pokemon_V2_Pokemon } from "../generated/graphql"

interface PokemonDisplayRowProps {
  pokemon: {
    id: Pokemon_V2_Pokemon["id"]
    name: Pokemon_V2_Pokemon["name"]
    height?: Pokemon_V2_Pokemon["height"]
  }
}

export const PokemonDisplayRow = ({ pokemon }: PokemonDisplayRowProps) => {
  return (
    <TableRow>
      <TableCell>{pokemon.id}</TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.height}</TableCell>
    </TableRow>
  )
}
