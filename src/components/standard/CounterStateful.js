import React, { Component } from 'react';

import { Button } from '../../styles/Button';

class CounterStateful extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleReset() {
    this.setState({
      count: this.state.count * 0
    });
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Class Count: {count}</p>
        <Button
          reset
          type='button'
          disabled={count === 0}
          onClick={this.handleReset}
        >
          Reset
        </Button>
        <Button type='button' onClick={this.handleIncrement}>
          Increment
        </Button>
        <Button type='button' onClick={this.handleDecrement}>
          Decrement
        </Button>
      </div>
    );
  }
}

export default CounterStateful;
