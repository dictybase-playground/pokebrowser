import React from "react"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { QueryResultList } from "./QueryResultList"
interface PokemonQueryProps {
  limit: number
}

export const PokemonQuery = ({ limit }: PokemonQueryProps) => {
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
