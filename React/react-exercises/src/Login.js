import { createRef } from "react";
import React from "react";

export class Login extends React.Component {
  _formRef = createRef()
  handlerFormSubmit = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const remember = event.target.elements.remember.checked
    console.log({
        username,
        password,
        remember
    })
  }
 

    render() {
    return (
      <div>
        <h3>My Uncontrolled Form Text</h3>
        <form ref={this._formRef} onSubmit={this.handlerFormSubmit}>
            <input name="username" />    
            <input name="password" type="password" />
            <input name= "remember" type="checkbox" />
        <div>
            <button type="submit">Login</button>
        </div>
        </form>
      </div>
    );
  }
}
