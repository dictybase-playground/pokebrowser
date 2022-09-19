import { render, screen } from "@testing-library/react"
import { PokemonQuery } from "./PokemonQuery"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { ApolloError } from "@apollo/client"

describe("PokemonQuery", () => {
  it("renders pokemon", () => {
    render(<PokemonQuery />)
    expect(screen.getByText("bulbasaur")).toBeInTheDocument()
    expect(screen.getByText("ivysaur")).toBeInTheDocument()
    expect(screen.getByText("venusaur")).toBeInTheDocument()
  })

  it("renders a loading state if Pokemon data is loading", async () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      loading: true,
    })

    render(<PokemonQuery />)
    expect(await screen.findByTestId("skeleton-loader")).toBeInTheDocument()
  })

  it("renders an error state if Pokemon data fails to load", () => {
    ;(useGetAllPokemonQuery as jest.Mock).mockReturnValue({
      error: new ApolloError({}),
    })

    render(<PokemonQuery />)
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
