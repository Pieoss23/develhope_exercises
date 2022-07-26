import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return { count: state.count + this.props.incrementBy };
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <CounterDisplay count ={this.state.count} />;
      </div>
    );
  }
}
class CounterDisplay extends React.Component {
    render() {
      return (
        <h1>Counter: {this.props.count}</h1>
      )
    }
  }

/* 
Extract the h1 tag showing the count state variable into a new component called CounterDisplay
and render it within the Counter component, passing it the count state variable as a prop.
*/

Counter.defaultProps = {
  timeout: 1000,
  initialValue: 0,
  incrementBy: 1,
};
