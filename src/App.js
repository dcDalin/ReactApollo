import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjnkr52qc4hem01ghdn45lfye/master"
});

const POSTS_QUERY = gql`
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

// client
//   .query({
//     query: testQuery
//   })
//   .then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Query query={POSTS_QUERY}>
            {({ loading, data }) => {
              if (loading) return "Loading...";
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>);
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
