import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

interface PokemonDisplaySkeletonProps {
  limit: number
}

const getSkeletonDimensions = (rows: number) => {
  const jsx = []
  for (let i = 0; i < rows; i++) {
    jsx.push(
      <TableRow>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" />
        </TableCell>
      </TableRow>,
    )
  }
  return jsx
}

export const PokemonDisplaySkeleton = ({
  limit,
}: PokemonDisplaySkeletonProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> ID </TableCell>
            <TableCell> Name </TableCell>
            <TableCell> Height (decimeter) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getSkeletonDimensions(limit)}</TableBody>
      </Table>
    </TableContainer>
  )
}
