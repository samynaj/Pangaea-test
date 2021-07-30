import './App.css';
import Shop from './pages/Shop';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      return alert(`Graphql error ${message}`)
    })
  }
})
const link = from([ 
  errorLink,
  new HttpLink({uri: 'https://pangaea-interviews.now.sh/api/graphql'})
])
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Shop />
      </div>
    </ApolloProvider>
  );
}

export default App;
