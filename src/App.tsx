import { Container } from "@mui/material"
import { PokemonQuery } from "./components/PokemonQuery"

const App = () => {
  return (
    <Container className="App">
      <h1> Pokebrowser </h1>
      <PokemonQuery />
    </Container>
  )
}

export default App
