import { GetAllPokemonQuery, PokemonByTypeQuery } from "../generated/graphql"

interface PokemonDisplayProps {
  data: GetAllPokemonQuery | PokemonByTypeQuery
}

export const PokemonDisplay = ({ data }: PokemonDisplayProps) => {
  return (
    <ul>
      {data?.pokemon_v2_pokemon.map((pokemon) => {
        return <li key={pokemon.id}>{pokemon.name}</li>
      })}
    </ul>
  )
}
