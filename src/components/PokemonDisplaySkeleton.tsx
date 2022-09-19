import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

const getSkeletonRows = (rows: number) => {
  const jsx = []
  for (let i = 0; i < rows; i++) {
    jsx.push(
      <TableRow key={i}>
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

export const PokemonDisplaySkeleton = () => {
  return (
    <TableContainer data-testid="skeleton-loader">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell> ID </TableCell>
            <TableCell> Name </TableCell>
            <TableCell> Height (decimeter) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getSkeletonRows(10)}</TableBody>
      </Table>
    </TableContainer>
  )
}
