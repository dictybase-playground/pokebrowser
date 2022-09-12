import { Typography, useTheme } from "@mui/material"
import { ApolloError } from "@apollo/client"

interface PokemonDisplayErrorProps {
  error: ApolloError
}

export const PokemonDisplayError = ({ error }: PokemonDisplayErrorProps) => {
  const { palette } = useTheme()

  return (
    <Typography sx={{ color: palette.error.main }}>
      {`Error: ${error.message}`}
    </Typography>
  )
}
