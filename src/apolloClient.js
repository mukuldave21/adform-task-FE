import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloLink } from '@apollo/client';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      alert(`GraphQL Error Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) {
    alert(`Network error: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPH_API_URL,
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
