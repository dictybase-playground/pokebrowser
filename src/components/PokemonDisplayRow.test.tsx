import { render, screen } from "@testing-library/react"
import { PokemonDisplayRow } from "./PokemonDisplayRow"
import { mockPokemon } from "../data/mockPokemon"

const testPokemon = mockPokemon.pokemon_v2_pokemon[0]
const tableBody = document.createElement("tbody")

describe("PokemonDisplayRow", () => {
  it("renders a table row", () => {
    render(<PokemonDisplayRow pokemon={testPokemon} />, {
      container: document.body.appendChild(tableBody),
    })

    expect(screen.getByRole("row")).toBeInTheDocument()
  })

  it("displays id, name, and height data about the given pokemon", () => {
    render(<PokemonDisplayRow pokemon={testPokemon} />, {
      container: document.body.appendChild(tableBody),
    })

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    expect(screen.getByText("7")).toBeInTheDocument()
  })
})
