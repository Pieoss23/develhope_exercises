import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name === "John" && <p>Welcome, {this.props.name}</p>}
        <Age age="12" />
      </div>
    );
  }
}
