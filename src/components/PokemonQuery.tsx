import { useGetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplay } from "./PokemonDisplay"
interface PokemonQueryProps {
  limit: number | string
}

export const PokemonQuery = ({ limit }: PokemonQueryProps) => {
  if (typeof limit === "string") limit = parseInt(limit)

  let { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
    },
  })

  return (
    <>
      {loading ? "Loading" : <></>}
      {error ? "Error" : <></>}
      {data ? <PokemonDisplay data={data} /> : <></>}
    </>
  )
}
