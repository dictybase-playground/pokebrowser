import React from "react"
import { usePokemonByTypeQuery } from "../generated/graphql"
import { QueryResultList } from "./QueryResultList"
interface PokemonQueryByTypeProps {
  limit: number
  type: string
}

export const PokemonQueryByType = ({
  limit,
  type,
}: PokemonQueryByTypeProps) => {
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
