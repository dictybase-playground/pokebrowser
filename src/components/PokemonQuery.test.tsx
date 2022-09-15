import { render, screen } from "@testing-library/react"
import { PokemonQuery } from "./PokemonQuery"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { ApolloError } from "@apollo/client"

const mocks = {
  listPokemonNoType: {
    data: {
      pokemon_v2_pokemon: [
        {
          id: 1,
          name: "bulbasaur",
          height: 7,
          __typename: "pokemon_v2_pokemon",
        },
        {
          id: 2,
          name: "ivysaur",
          height: 10,
          __typename: "pokemon_v2_pokemon",
        },
        {
          id: 3,
          name: "venusaur",
          height: 20,
          __typename: "pokemon_v2_pokemon",
        },
      ],
    },
  },
}

jest.mock("../generated/graphql", () => {
  const useGetAllPokemonQuery = jest.fn()
  return { useGetAllPokemonQuery }
})

describe("PokemonQuery", () => {
  beforeEach(() => jest.clearAllMocks())

  it("renders pokemon", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: false,
      data: mocks.listPokemonNoType.data,
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

    render(<PokemonQuery />)
    expect(screen.getByTestId("skeleton-loader")).toBeInTheDocument()
  })

  it("renders an error state if Pokemon data fails to load", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      error: new ApolloError({}),
    })

    render(<PokemonQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
