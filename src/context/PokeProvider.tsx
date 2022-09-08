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

// const Operations = {
//   Queries: {
//     useGetAllPokemonQuery,
//   },
// }

// const PokemonContext = createContext({
//   queryResult: undefined,
// })

// export const PokeProvider = ({
//   children,
// }: PokeProviderProps): React.ReactElement => {
//   const [data, setData] = useState({})

//   const getAndSetPokemon = (limit: number): void => {
//     const { data } = useGetAllPokemonQuery({
//       variables: {
//         limit,
//       },
//     })
//     setData(data)
//   }

//   return (
//     <ApolloProvider client={client}>
//       <PokemonContext.Provider value={data}>
//         {children}
//       </PokemonContext.Provider>
//     </ApolloProvider>
//   )
// }

export const PokeProvider = ({
  children,
}: PokeProviderProps): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
