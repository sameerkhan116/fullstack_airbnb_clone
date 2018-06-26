import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";

import "./index.css";

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
