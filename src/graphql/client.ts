import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL_GQL + '/graphql',
  cache: new InMemoryCache()
})
