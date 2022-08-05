import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:5110/graphql/',
  cache: new InMemoryCache()
})