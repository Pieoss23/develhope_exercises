import React from "react";
import { Welcome } from "./Welcome";

export default class InteractiveWelcome extends React.Component {
  state = {
    username: ''
 };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Welcome name={this.state.username} />
        <h5>Insert your name</h5>

=======
>>>>>>> forms-04
        <Welcome name={this.state.name} />
        <h5>Insert uyour name</h5>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
