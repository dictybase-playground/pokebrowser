import { render, screen } from "@testing-library/react"
import { PokemonDisplayRow } from "./PokemonDisplayRow"
import { mockPokemon } from "../mock/mockPokemon"
import { Table, TableBody } from "@mui/material"

const testPokemon = mockPokemon.pokemon_v2_pokemon[0]

describe("PokemonDisplayRow", () => {
  it("renders a table row", () => {
    render(
      <Table>
        <TableBody>
          <PokemonDisplayRow pokemon={testPokemon} />
        </TableBody>
      </Table>,
    )

    expect(screen.getByRole("row")).toBeInTheDocument()
  })

  it("displays id, name, and height data about the given pokemon", () => {
    render(
      <Table>
        <TableBody>
          <PokemonDisplayRow pokemon={testPokemon} />
        </TableBody>
      </Table>,
    )

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    expect(screen.getByText("7")).toBeInTheDocument()
  })
})
