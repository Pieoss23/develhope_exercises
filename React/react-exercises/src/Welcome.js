import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name} {this.props.lastName}!</p>
        <p>and i've {this.props.age}</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Pietro',
    lastName: 'Oss',
    age: 30
}