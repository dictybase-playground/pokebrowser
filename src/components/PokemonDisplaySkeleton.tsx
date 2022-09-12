import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"

interface PokemonDisplaySkeletonProps {
  limit: number
}

const getSkeletonDimensions = (rows: number) => {
  const jsx = []
  for (let i = 0; i < rows; i++) {
    jsx.push(
      <Skeleton
        animation="wave"
        width="fullWidth"
        component="h1"
      />,
    )
  }
  return jsx
}

export const PokemonDisplaySkeleton = ({
  limit,
}: PokemonDisplaySkeletonProps) => {
  return (
    <TableContainer>
      <Table>{getSkeletonDimensions(limit)}</Table>
    </TableContainer>
  )
}
