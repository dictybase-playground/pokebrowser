import React from "react"
import { GetAllPokemonQuery, PokemonByTypeQuery } from "../generated/graphql"

interface QueryResultListProps {
  data: GetAllPokemonQuery | PokemonByTypeQuery
}

export const QueryResultList = ({ data }: QueryResultListProps) => {
  return (
    <ul>
      {data?.pokemon_v2_pokemon.map((pokemon) => {
        return <li key={pokemon.id}>{pokemon.name}</li>
      })}
    </ul>
  )
}
