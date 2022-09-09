import React from "react"
import { usePokemonByTypeQuery } from "../generated/graphql"
import { QueryResultList } from "./QueryResultList"
interface PokemonQueryByTypeProps {
  limit: number | string
  type: string
}

export const PokemonQueryByType = ({
  limit,
  type,
}: PokemonQueryByTypeProps) => {
  if (typeof limit === "string") limit = parseInt(limit)

  let { data, loading, error } = usePokemonByTypeQuery({
    variables: {
      limit,
      type,
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
