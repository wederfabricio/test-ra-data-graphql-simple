import * as React from "react";
import { Component } from "react";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { Admin, ListGuesser, Resource } from "react-admin";

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }
  componentDidMount() {
    buildGraphQLProvider({
      clientOptions: { uri: "https://graphqlzero.almansi.me/api" },
    }).then((dataProvider) => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
      </Admin>
    );
  }
}

export default App;
