import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

type Props = {
  children: React.ReactNode;
};

export const PokeProvider = ({ children }: Props): React.ReactElement => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
