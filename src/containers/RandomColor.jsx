import React, { Component } from 'react';
import Swatch from '../presentation/Swatch';

const colorArray = [
  'red',
  'blue',
  'green',
  'cyan',
  'magenta',
  'yellow',
  'black',
];

class RandomColor extends Component {
  state = { color: '' };

  componentDidMount = () => {
    this.colorSwitch();
  };

  colorSwitch = () => {
    setInterval(() => {
      const randomizer = Math.floor(Math.random() * colorArray.length);
      this.setState({ color: colorArray[randomizer] });
    }, 1000);
  };

  render() {
    return (
      <>
        <h1>Hello!</h1>
        <Swatch color={this.state.color} />
      </>
    );
  }
}

export default RandomColor;
