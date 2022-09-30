import { Container, Typography } from "@mui/material"
import PokemonQuery from "components/PokemonQuery"

const App = () => (
  <Container className="App">
    <Typography
      variant="h2"
      variantMapping={{ h2: "h1" }}>
      Pokebrowser
    </Typography>
    <PokemonQuery />
  </Container>
)

export default App
