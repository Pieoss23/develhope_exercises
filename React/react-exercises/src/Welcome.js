import React from "react";
import { Age } from "./Age";
import "./index.css"
export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        {this.props.name === "John" && <p>Welcome, {this.props.name}</p>}
        <Age age="30" />
      </div>
    );
  }
}
