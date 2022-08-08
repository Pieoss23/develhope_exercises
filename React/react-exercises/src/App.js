import React from "react";
import { Container } from "./Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;

// Create a Container component that renders its children within a div tag. 
// Have the div tag use a white background and a red border, either with a custom class or by using tailwindcss.
