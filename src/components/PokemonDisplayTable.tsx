import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"
import { GetAllPokemonQuery } from "generated/graphql"
import PokemonDisplayRow from "./PokemonDisplayRow"

interface PokemonDisplayTableProperties {
  pokemonArray: GetAllPokemonQuery["pokemon_v2_pokemon"]
}

const PokemonDisplayTable = ({
  pokemonArray,
}: PokemonDisplayTableProperties) => (
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
        {pokemonArray.map((pokemon) => (
          <PokemonDisplayRow
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default PokemonDisplayTable
