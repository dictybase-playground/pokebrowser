import { Stack, Button } from "@mui/material"
import { useAtom } from "jotai"
import { currentPageAtom } from "../context/AtomConfigs"

interface PaginationProps {
  pageItemLimit: number
  totalItems: number
}

const getPages = (totalPages: number, currentPage: number) => {
  if (currentPage < 1) currentPage = 1
  if (currentPage > totalPages) currentPage = totalPages
  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === currentPage ||
      i === currentPage + 1 ||
      i === currentPage - 1 ||
      i === 1 ||
      i === totalPages
    ) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...")
    }
  }

  return pages
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

  const handleJumpTo = (page: number) => {
    page = page > pageCount ? pageCount : page
    page = page < 1 ? 1 : page
    setCurrentPage(page)
  }

  return (
    <Stack direction="row">
      <Button onClick={handlePrevPage}> Prev </Button>
      <Button onClick={handleNextPage}> Next </Button>
      {getPages(pageCount, currentPage).map((pageNumber) => {
        switch (pageNumber) {
          case currentPage:
            return <Button disabled>{pageNumber}</Button>
          case "...":
            return <Button disabled>{pageNumber}</Button>
          default:
            return (
              <Button onClick={() => handleJumpTo(pageNumber as number)}>
                {pageNumber}
              </Button>
            )
        }
      })}
    </Stack>
  )
}
