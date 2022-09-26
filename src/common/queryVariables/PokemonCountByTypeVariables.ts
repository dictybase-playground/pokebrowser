import { GetPokemonCountByTypeQueryVariables } from "../../generated/graphql"

const getPokemonCountByTypeVariables = (
  type: string,
): GetPokemonCountByTypeQueryVariables => ({
  where:
    type === "all"
      ? undefined
      : {
          //  eslint-disable-next-line camelcase
          pokemon_v2_pokemontypes: {
            // eslint-disable-next-line camelcase
            pokemon_v2_type: {
              name: {
                _eq: type,
              },
            },
          },
        },
})

export default getPokemonCountByTypeVariables
