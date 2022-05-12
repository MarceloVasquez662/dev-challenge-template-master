import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import Header from "./components/header";
import Form from "./components/form";
import CardPaises from "./components/miniComponents/cardPaises";

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

  const { data, loading, error } = useQuery(LISTAPAISES, { client })

  if (loading || error) {
    return <p>Cargando consulta</p>;
  }

  return (
    <ApolloProvider client={client}>
      <div><Header></Header></div>
      <div><Form></Form></div>

      <div className="paises row justify-content-center">
        {data.countries.map(pais => {
          return <CardPaises nombrePais={pais.name} codigo={pais.code} emoji={pais.emoji} capital={pais.capital} moneda={pais.currency} />
        })}
      </div>

    </ApolloProvider>
  );
}
export default App;
