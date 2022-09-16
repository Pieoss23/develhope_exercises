import React from "react";
import { Message } from "./Message";

export class Hello extends React.Component {
  render() {
    return (
      <div>
        <Message />
        <h1>Hello, World</h1>
      </div>
    );
  }
}
