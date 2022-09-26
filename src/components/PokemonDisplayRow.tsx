import { TableRow, TableCell } from "@mui/material"
// eslint-disable-next-line camelcase
import { Pokemon_V2_Pokemon } from "../generated/graphql"

interface PokemonDisplayRowProperties {
  pokemon: {
    // eslint-disable-next-line camelcase
    id: Pokemon_V2_Pokemon["id"]
    // eslint-disable-next-line camelcase
    name: Pokemon_V2_Pokemon["name"]
    // eslint-disable-next-line camelcase
    height?: Pokemon_V2_Pokemon["height"]
  }
}

const PokemonDisplayRow = ({ pokemon }: PokemonDisplayRowProperties) => (
  <TableRow>
    <TableCell>{pokemon.id}</TableCell>
    <TableCell>{pokemon.name}</TableCell>
    <TableCell>{pokemon.height}</TableCell>
  </TableRow>
)

export default PokemonDisplayRow
