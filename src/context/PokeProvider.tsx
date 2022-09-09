import React, { useState, createContext, useEffect } from "react"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import {
  useGetAllPokemonQuery,
  GetAllPokemonQueryResult,
} from "../generated/graphql"

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
})

interface PokeProviderProps {
  children: React.ReactNode
}

export const PokeProvider = ({
  children,
}: PokeProviderProps): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
