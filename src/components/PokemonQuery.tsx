import { useAtom } from "jotai"
import {
  pokemonLimitIntAtom,
  pokemonTypeAtom,
  currentPageAtom,
} from "../context/AtomConfigs"
import { useGetAllPokemonQuery, GetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplayTable } from "./PokemonDisplayTable"
import { PokemonDisplaySkeleton } from "./PokemonDisplaySkeleton"
import { PokemonDisplayError } from "./PokemonDisplayError"
import { PokemonLimitSelector } from "./PokemonLimitSelector"
import { PokemonTypeSelector } from "./PokemonTypeSelector"
import { Pagination } from "./Pagination"
import { Stack } from "@mui/material"

const rowsPerPage = 10

const getCurrentPageRows = (
  data: GetAllPokemonQuery["pokemon_v2_pokemon"],
  currentPage: number,
  rowsPerPage: number,
) => {
  const startIdx = (currentPage - 1) * rowsPerPage
  const endIdx = startIdx + rowsPerPage

  return data.slice(startIdx, endIdx)
}

export const PokemonQuery = () => {
  const [limit] = useAtom(pokemonLimitIntAtom)
  const [type] = useAtom(pokemonTypeAtom)
  const [currentPage] = useAtom(currentPageAtom)

  const { data, loading, error } = useGetAllPokemonQuery({
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
        {data ? (
          <Pagination
            pageItemLimit={rowsPerPage}
            totalItems={data.pokemon_v2_pokemon.length}
          />
        ) : (
          <></>
        )}
      </Stack>
      <br />
      {loading ? <PokemonDisplaySkeleton /> : <></>}
      {error ? <PokemonDisplayError error={error} /> : <></>}
      {data ? (
        <PokemonDisplayTable
          pokemonArray={getCurrentPageRows(
            data.pokemon_v2_pokemon,
            currentPage,
            rowsPerPage,
          )}
        />
      ) : (
        <></>
      )}
    </>
  )
}
