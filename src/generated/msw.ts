import { graphql, ResponseResolver, GraphQLRequest, GraphQLContext } from 'msw'

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockGetAllPokemonQuery((req, res, ctx) => {
 *   const { limit, where } = req.variables;
 *   return res(
 *     ctx.data({ pokemon_v2_pokemon })
 *   )
 * })
 */
export const mockGetAllPokemonQuery = (resolver: ResponseResolver<GraphQLRequest<GetAllPokemonQueryVariables>, GraphQLContext<GetAllPokemonQuery>, any>) =>
  graphql.query<GetAllPokemonQuery, GetAllPokemonQueryVariables>(
    'GetAllPokemon',
    resolver
  )
