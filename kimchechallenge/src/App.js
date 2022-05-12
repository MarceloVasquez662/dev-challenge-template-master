import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Header from "./components/header";
import Form from "./components/form";


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com"
});

const LISTAPAISES = gql`
  {
    countries {
      name
      code
      emoji
      languages{
        name
      }
      continent{
        name
      }
      capital
      currency
    }
  }
`;

function App() {

  const { data, loading, error } = useQuery(LISTAPAISES, { client });
  if (loading || error) {
    return <p>Cargando datos ...</p>
  }

  const datos = data.countries;

  return (
    <ApolloProvider client={client} >
      <div><Header></Header></div>
      <div><Form data={datos}></Form></div>
    </ApolloProvider>
  );
}
export default App;
