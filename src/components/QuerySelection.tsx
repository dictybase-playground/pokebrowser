import React from "react"
import { Stack, Button } from "@mui/material"
import { useGetAllPokemonQuery } from "../generated/graphql"

interface QuerySelectionProps {
  //define property types
}

export const QuerySelection = (): React.ReactElement => {
  return (
    <Stack direction="row">
      <Button>Get Pokemon</Button>
    </Stack>
  )
}
