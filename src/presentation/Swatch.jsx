import React, { Component } from 'react';

const Swatch = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, height: 100, width: 100 }}></div>
  );
};

export default Swatch;
