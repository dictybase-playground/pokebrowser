import { render, screen } from "@testing-library/react"
import { GetAllPokemonQuery } from "../generated/graphql"
import PokemonDisplayTable from "./PokemonDisplayTable"

const testPokemonArray: GetAllPokemonQuery["pokemon_v2_pokemon"] = [
  {
    __typename: "pokemon_v2_pokemon",
    id: 1,
    name: "bulbasaur",
    height: 7,
  },
  {
    __typename: "pokemon_v2_pokemon",
    id: 2,
    name: "ivysaur",
    height: 10,
  },
  {
    __typename: "pokemon_v2_pokemon",
    id: 3,
    name: "venusaur",
    height: 20,
  },
]

describe("PokemonDisplayTable", () => {
  it("renders a table", () => {
    render(<PokemonDisplayTable pokemonArray={testPokemonArray} />)

    expect(screen.getByRole("table")).toBeInTheDocument()
  })

  it("renders N + 1 table rows for array of length N", () => {
    render(<PokemonDisplayTable pokemonArray={testPokemonArray} />)

    expect(screen.getAllByRole("row")).toHaveLength(testPokemonArray.length + 1)
  })
})
