import React from "react"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { QueryResultList } from "./QueryResultList"
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
      {data ? <QueryResultList data={data} /> : <></>}
    </>
  )
}
