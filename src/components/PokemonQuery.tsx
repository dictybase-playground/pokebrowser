import { useState } from "react"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplay } from "./PokemonDisplay"
import { PokemonDisplaySkeleton } from "./PokemonDisplaySkeleton"
import { Selector } from "./Selector"
import { SelectChangeEvent } from "@mui/material"

const pokemonTypes: Array<string> = [
  "all",
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
]

const limits = ["60", "90", "120", "150"]

export const PokemonQuery = () => {
  const [limit, setLimit] = useState(parseInt(limits[0]))
  const [type, setType] = useState(pokemonTypes[0])

  let { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
      where: {
        pokemon_v2_pokemontypes: { pokemon_v2_type: { name: { _eq: type } } },
      },
    },
  })

  const limitSelectorChangeHandler = (e: SelectChangeEvent<string>): void => {
    setLimit(parseInt(e.target.value))
  }

  const typeSelectorChangeHandler = (e: SelectChangeEvent<string>): void => {
    setType(e.target.value)
  }

  return (
    <>
      <Selector
        label="Limit"
        options={limits}
        value={limit.toString()}
        handleChange={limitSelectorChangeHandler}
      />
      <Selector
        label="Type"
        options={pokemonTypes}
        value={type}
        handleChange={typeSelectorChangeHandler}
      />
      <br />
      {loading ? <PokemonDisplaySkeleton limit={limit} /> : <></>}
      {error ? `${error.message}` : <></>}
      {data ? <PokemonDisplay data={data} /> : <></>}
    </>
  )
}
