import { render, screen } from "@testing-library/react"
import { PokemonQuery } from "./PokemonQuery"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { ApolloError } from "@apollo/client"
import { mockPokemon } from "../data/mockPokemon"
import { mockGetAllPokemonQuery } from "../generated/msw"
import { setupServer } from "msw/node"

const server = setupServer(
  mockGetAllPokemonQuery((req, res, ctx) => {
    res(ctx.data(mockPokemon.pokemon_v2_pokemon))
  }),
)

describe("PokemonQuery", () => {
  it("renders pokemon", () => {
    render(<PokemonQuery />)
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    expect(screen.getByText("ivysaur")).toBeInTheDocument()
    expect(screen.getByText("venusaur")).toBeInTheDocument()
  })

  it("renders a loading state if Pokemon data is loading", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      loading: true,
    })

    render(<PokemonQuery />)
    expect(screen.findByTestId("skeleton-loader")).toBeInTheDocument()
  })

  it("renders an error state if Pokemon data fails to load", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      error: new ApolloError({}),
    })

    render(<PokemonQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
