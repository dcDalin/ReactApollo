import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjnkr52qc4hem01ghdn45lfye/master"
});

const testQuery = gql`
  query {
    posts {
      id
      createdAt
      updatedAt
      title
      body
    }
  }
`;

client
  .query({
    query: testQuery
  })
  .then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Hello World</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
