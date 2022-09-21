import { Stack, Button } from "@mui/material"
import { useAtom } from "jotai"
import { currentPageAtom } from "../context/AtomConfigs"

interface PaginationProps {
  pageItemLimit: number
  totalItems: number
}

export const Pagination = ({ pageItemLimit, totalItems }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
  const pageCount = Math.ceil(totalItems / pageItemLimit)

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, pageCount))
  }

  const handlePrevPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1))
  }

  return (
    <Stack direction="row">
      <Button onClick={handlePrevPage}> Prev </Button>
      <Button disabled> {`${currentPage} / ${pageCount}`} </Button>
      <Button onClick={handleNextPage}> Next </Button>
    </Stack>
  )
}
