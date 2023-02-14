import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { num: 10 };

  changeNum = (value) => {
    this.setState({ num: value });
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 10 });
  };

  render() {
    const { num } = this.state;
    return (
      <div>
        <label>
          Number of Events
          <input
            className='num'
            type='number'
            value={num}
          >
          </input>
        </label>
      </div>
    )
  }
}

export default NumberOfEvents;