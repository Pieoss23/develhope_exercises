import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name ?? "Pietrone"}</p>
        <p>and i've {this.props.age}</p>
      </div>
    );
  }
}
