import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { PokemonQuery } from "./PokemonQuery"
import { GetAllPokemonDocument } from "../generated/graphql"

const mocks = [
  {
    request: {
      query: GetAllPokemonDocument,
      variables: {
        limit: 3,
        where: {
          pokemon_v2_pokemontypes: {
            pokemon_v2_type: { name: { _eq: "all" } },
          },
        },
      },
    },
    result: {
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
  },
]

it("renders without error", async () => {
  render(
    <MockedProvider
      mocks={mocks}
      addTypename={true}>
      <PokemonQuery />
    </MockedProvider>,
  )

  expect(await screen.getByText("bulbasaur")).toBeInTheDocument()
  expect(await screen.getByText("ivysaur")).toBeInTheDocument()
  expect(await screen.getByText("venusaur")).toBeInTheDocument()
})
