import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { useAtom } from "jotai"
import { pokemonLimitIntAtom } from "../context/AtomConfigs"

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
  const [limit] = useAtom(pokemonLimitIntAtom)

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
        <TableBody>{getSkeletonRows(limit)}</TableBody>
      </Table>
    </TableContainer>
  )
}
