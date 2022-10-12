import { useAtom } from "jotai"
import { Stack } from "@mui/material"
import {
  pokemonLimitIntAtom,
  pokemonTypeAtom,
  pokemonOffsetAtom,
} from "context/AtomConfigs"
import { useGetAllPokemonQuery } from "generated/graphql"
import PokemonDisplayTable from "./PokemonDisplayTable"
import PokemonDisplaySkeleton from "./PokemonDisplaySkeleton"
import PokemonDisplayError from "./PokemonDisplayError"
import PokemonLimitSelector from "./PokemonLimitSelector"
import PokemonTypeSelector from "./PokemonTypeSelector"
import Pagination from "./Pagination"

const PokemonQuery = () => {
  const [limit] = useAtom(pokemonLimitIntAtom)
  const [type] = useAtom(pokemonTypeAtom)
  const [offset] = useAtom(pokemonOffsetAtom)

  const { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
      offset,
      where:
        type === "all"
          ? undefined
          : {
              // eslint-disable-next-line camelcase
              pokemon_v2_pokemontypes: {
                // eslint-disable-next-line camelcase
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
        {data ? <Pagination /> : undefined}
      </Stack>
      <br />
      {loading ? <PokemonDisplaySkeleton /> : undefined}
      {error ? <PokemonDisplayError error={error} /> : undefined}
      {data ? (
        <PokemonDisplayTable pokemonArray={data.pokemon_v2_pokemon} />
      ) : undefined}
    </>
  )
}

export default PokemonQuery
