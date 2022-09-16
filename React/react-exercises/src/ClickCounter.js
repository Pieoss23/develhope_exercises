import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  handleCounterIncrement = (event) => {
      console.log(event)
      this.setState(state => {
        return {
          count: state.count + this.props.incrementBy
        }
      })
    }

  render() {
    return (
      <div>
        <button onClick={this.handleCounterIncrement}>Click me</button>
        <div>counter: {this.state.count}</div>
      </div>
    );
  }
}

ClickCounter.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
};
