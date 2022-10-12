import { Typography, useTheme } from "@mui/material"
import { ApolloError } from "@apollo/client"

interface PokemonDisplayErrorProperties {
  error: ApolloError
}

const PokemonDisplayError = ({ error }: PokemonDisplayErrorProperties) => {
  const { palette } = useTheme()

  return (
    <Typography sx={{ color: palette.error.main }}>
      {`Error: ${error.message}`}
    </Typography>
  )
}

export default PokemonDisplayError
