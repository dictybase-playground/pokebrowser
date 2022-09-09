import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
})

interface PokeProviderProps {
  children: React.ReactNode
}

export const PokeProvider = ({ children }: PokeProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

//
