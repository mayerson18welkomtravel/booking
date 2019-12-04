import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_URL_API_AWS,
  headers: {
    "x-api-key": process.env.VUE_APP_KEY_API
  }
});

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient2 = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient2;
