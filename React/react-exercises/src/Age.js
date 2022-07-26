import React from "react";

export class Age extends React.Component {
  render() {
    return (
        <div>
        <p>Your age is {this.props.age >= 18 && <p>{this.props.age}</p>}</p>
        </div>
        ) 
  }
}
