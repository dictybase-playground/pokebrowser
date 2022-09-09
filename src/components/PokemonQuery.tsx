import { useGetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplay } from "./PokemonDisplay"
interface PokemonQueryProps {
  limit: number | string
  type: string
}

export const PokemonQuery = ({ limit, type }: PokemonQueryProps) => {
  if (typeof limit === "string") limit = parseInt(limit)

  let { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: type } } },
      },
    },
  })

  return (
    <>
      {loading ? "Loading" : <></>}
      {error ? `${error.message}` : <></>}
      {data ? <PokemonDisplay data={data} /> : <></>}
    </>
  )
}
