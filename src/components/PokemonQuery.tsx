import { useAtom } from "jotai"
import { pokemonLimitIntAtom, pokemonTypeAtom } from "../context/AtomConfigs"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplayTable } from "./PokemonDisplayTable"
import { PokemonDisplaySkeleton } from "./PokemonDisplaySkeleton"
import { PokemonDisplayError } from "./PokemonDisplayError"
import { PokemonLimitSelector } from "./PokemonLimitSelector"
import { PokemonTypeSelector } from "./PokemonTypeSelector"
import { Stack } from "@mui/material"

export const PokemonQuery = () => {
  const [limit] = useAtom(pokemonLimitIntAtom)
  const [type] = useAtom(pokemonTypeAtom)

  let { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
      where:
        type === "all"
          ? null
          : {
              pokemon_v2_pokemontypes: {
                pokemon_v2_type: { name: { _eq: type } },
              },
            },
    },
  })

  return (
    <>
      <Stack
        direction="row"
        spacing={1}>
        <PokemonLimitSelector />
        <PokemonTypeSelector />
      </Stack>
      <br />
      {loading ? <PokemonDisplaySkeleton /> : <></>}
      {error ? <PokemonDisplayError error={error} /> : <></>}
      {data ? (
        <PokemonDisplayTable pokemonArray={data.pokemon_v2_pokemon} />
      ) : (
        <></>
      )}
    </>
  )
}
