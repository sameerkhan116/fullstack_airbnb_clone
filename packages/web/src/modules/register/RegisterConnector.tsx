import * as React from "react";
import { RegisterController } from "@fullstack_airbnb/controller";

import RegisterView from "./view/RegisterView";

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }: any) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
