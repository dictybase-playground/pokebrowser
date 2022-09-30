import { Stack, Button } from "@mui/material"
import { useAtom } from "jotai"
import {
  currentPageAtom,
  pokemonLimitIntAtom,
  pokemonTypeAtom,
} from "context/AtomConfigs"
import { useGetPokemonCountByTypeQuery } from "generated/graphql"
import getPokemonCountByTypeVariables from "common/queryVariables/PokemonCountByTypeVariables"

const Pagination = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
  const [rowsPerPage] = useAtom(pokemonLimitIntAtom)
  const [type] = useAtom(pokemonTypeAtom)
  let pageCount = 1

  const { data, loading } = useGetPokemonCountByTypeQuery({
    variables: getPokemonCountByTypeVariables(type),
  })

  if (data) {
    const pokemonCount =
      data.pokemon_v2_pokemon_aggregate.aggregate?.count || rowsPerPage
    pageCount = Math.ceil(pokemonCount / rowsPerPage)
  }

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, pageCount))
  }

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1))
  }

  return (
    <Stack direction="row">
      <Button onClick={handlePreviousPage}> Prev </Button>
      {loading ? <Button disabled> {`${currentPage} / ?`} </Button> : undefined}
      {data ? (
        <Button disabled> {`${currentPage} / ${pageCount}`} </Button>
      ) : undefined}
      <Button onClick={handleNextPage}> Next </Button>
    </Stack>
  )
}

export default Pagination
