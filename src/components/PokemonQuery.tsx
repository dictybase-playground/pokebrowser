import { useState } from "react"
import { useAtom } from "jotai"
import { pokemonLimitIntAtom } from "../context/ArgumentsProvider"
import { useGetAllPokemonQuery } from "../generated/graphql"
import { PokemonDisplay } from "./PokemonDisplay"
import { PokemonDisplaySkeleton } from "./PokemonDisplaySkeleton"
import { PokemonDisplayError } from "./PokemonDisplayError"
import { LimitSelector } from "./LimitSelector"
import { SelectChangeEvent, Stack } from "@mui/material"

export const PokemonQuery = () => {
  const [limit] = useAtom(pokemonLimitIntAtom)

  let { data, loading, error } = useGetAllPokemonQuery({
    variables: {
      limit,
    },
  })

  return (
    <>
      <Stack
        direction="row"
        spacing={1}>
        <LimitSelector />
      </Stack>
      <br />
      {loading ? <PokemonDisplaySkeleton limit={limit} /> : <></>}
      {error ? <PokemonDisplayError error={error} /> : <></>}
      {data ? <PokemonDisplay data={data} /> : <></>}
    </>
  )
}
