import { GetAllPokemonQuery } from "../generated/graphql"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import { PokemonDisplayRow } from "./PokemonDisplayRow"

interface PokemonDisplayTableProps {
  pokemonArray: GetAllPokemonQuery["pokemon_v2_pokemon"]
}

export const PokemonDisplayTable = ({
  pokemonArray,
}: PokemonDisplayTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> ID </TableCell>
            <TableCell> Name </TableCell>
            <TableCell> Height (decimeter) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => {
            return (
              <PokemonDisplayRow
                key={pokemon.id}
                pokemon={pokemon}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
