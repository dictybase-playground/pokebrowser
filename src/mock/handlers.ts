import { mockGetAllPokemonQuery } from "../generated/graphql"
import mockPokemon from "./mockPokemon"

const handlers = [
  mockGetAllPokemonQuery((request, response, context) => {
    const { limit } = request.variables

    return response(
      context.data({
        // eslint-disable-next-line camelcase
        pokemon_v2_pokemon: mockPokemon.pokemon_v2_pokemon.slice(0, limit),
      }),
    )
  }),
]

export default handlers
