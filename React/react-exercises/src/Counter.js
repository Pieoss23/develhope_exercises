import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue ?? 0,
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
        <h1>Count: {this.state.count}</h1>;
      </div>
    );
  }
}

/* Modify the Counter component so that the initial value of the counter, the increment 
interval and the increment amount are passed as props to the component.
*/

Counter.defaultProps = {
  timeout: 1000,
  initialValue: 0,
  incrementBy: 1,
};
