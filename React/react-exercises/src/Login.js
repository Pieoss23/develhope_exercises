import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = (prevState) => {
    console.log(prevState);
    this.setState({
      ...prevState,
    });
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };


  
  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />
        <button
          type="button"
          disabled={!(this.state.username && this.state.password)}
          onClick={() => {
            this.onLogin(this.state);
          }}
        >
          Login
        </button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}
