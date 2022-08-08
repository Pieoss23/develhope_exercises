import React from "react";
import { Container } from "./Container";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={"Title from props"}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App;

// Modify the Container component so that it can display a title received within the title prop.