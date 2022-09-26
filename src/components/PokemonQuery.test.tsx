import { render, screen } from "@testing-library/react"
import { ApolloError } from "@apollo/client"
import {
  useGetAllPokemonQuery,
  useGetPokemonCountByTypeQuery,
} from "../generated/graphql"
import PokemonQuery from "./PokemonQuery"
import mockPokemon from "../mock/mockPokemon"

jest.mock("../generated/graphql", () => {
  // eslint-disable-next-line no-shadow
  const useGetAllPokemonQuery = jest.fn()
  // eslint-disable-next-line no-shadow
  const useGetPokemonCountByTypeQuery = jest.fn()
  return { useGetAllPokemonQuery, useGetPokemonCountByTypeQuery }
})

describe("PokemonQuery", () => {
  beforeEach(() => jest.clearAllMocks())

  it("renders pokemon", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mockPokemon,
    })
    ;(useGetPokemonCountByTypeQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: {
        // eslint-disable-next-line camelcase
        pokemon_v2_pokemon_aggregate: {
          aggregate: { count: mockPokemon.pokemon_v2_pokemon.length },
        },
      },
    })

    render(<PokemonQuery />)
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    expect(screen.getByText("ivysaur")).toBeInTheDocument()
    expect(screen.getByText("venusaur")).toBeInTheDocument()
  })

  it("renders a loading state if Pokemon data is loading", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      loading: true,
    })
    ;(useGetPokemonCountByTypeQuery as jest.Mock).mockReturnValue({
      loading: true,
    })

    render(<PokemonQuery />)
    expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()
  })

  it("renders an error state if Pokemon data fails to load", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      error: new ApolloError({}),
    })
    ;(useGetPokemonCountByTypeQuery as jest.Mock).mockReturnValue({
      error: new ApolloError({}),
    })

    render(<PokemonQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
