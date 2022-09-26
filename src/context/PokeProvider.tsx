import React from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
})

interface PokeProviderProperties {
  children: React.ReactNode
}

const PokeProvider = ({ children }: PokeProviderProperties) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default PokeProvider
