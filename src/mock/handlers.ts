import { mockGetAllPokemonQuery } from "../generated/graphql"
import { mockPokemon } from "./mockPokemon"

export const handlers = [
  mockGetAllPokemonQuery((req, res, ctx) => {
    const limit: number = req.variables.limit

    return res(
      ctx.data({
        pokemon_v2_pokemon: mockPokemon.pokemon_v2_pokemon.slice(0, limit),
      }),
    )
  }),
]
