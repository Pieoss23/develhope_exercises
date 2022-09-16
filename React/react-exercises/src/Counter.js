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

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return (
      <div>
        <h3>Counter : {this.state.count}</h3>
        {this.state.count < 6 && <p>This counter is great!</p>}
      </div>
    );
  }
}


Counter.defaultProps = {
  timeout: 1000,
  incrementBy: 1,
  initialValue: 0,
};
