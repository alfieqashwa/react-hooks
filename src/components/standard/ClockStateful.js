import React, { Component } from 'react';

class ClockStateful extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;
    return <FormattedDate date={date} />;
  }
}

const FormattedDate = ({ date }) => (
  <div>
    <h3>It is {date.toLocaleTimeString()} now.</h3>
  </div>
);

export default ClockStateful;
