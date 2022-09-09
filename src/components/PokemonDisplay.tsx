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

interface PokemonDisplayProps {
  data: GetAllPokemonQuery
}

export const PokemonDisplay = ({ data }: PokemonDisplayProps) => {
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
          {data?.pokemon_v2_pokemon.map((pokemon) => {
            return (
              <TableRow key={pokemon.id}>
                <TableCell>{pokemon.id}</TableCell>
                <TableCell>{pokemon.name}</TableCell>
                <TableCell>{pokemon.height}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
