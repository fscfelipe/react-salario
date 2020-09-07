import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  constructor() {
    super();
  }

  render() {
    const { color = 'black', value, percentage = 0, label } = this.props;

    const formattedPercentage = percentage > 0 ? `(${percentage})` : '';
    const formattedValue = `${value} ${formattedPercentage}`;

    return (
      <div className="input-field col s12 m6 l3">
        <input autoFocus id="inputReadOnly" value={formattedValue} readOnly />
        <label className="active" htmlFor="inputReadOnly">
          {label}
        </label>
      </div>
    );
  }
}