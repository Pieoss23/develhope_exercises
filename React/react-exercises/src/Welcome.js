import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? "Pietrone"}</p>
      <Age age = {
        this.props.age >= 18
        && <p>{this.props.age}</p>
        } />
      </div>
    );
  }
}
