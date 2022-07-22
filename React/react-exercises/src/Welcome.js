import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {props.name}!</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
    name: 'Pietro',
    lastName: 'Oss',
    age: 30

}