import React, { Component } from 'react';
import { formatMoney, formatPercentage } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  constructor() {
    super();
  }

  render() {
    const { color = 'black', value, percentage = 0, label } = this.props;

    const id = 'input' + label.replace(' ', '');

    const formattedPercentage =
      percentage > 0 ? `(${formatPercentage(percentage)})` : '';

    const formattedValue = `${formatMoney(value)} ${formattedPercentage}`;

    return (
      <div className="input-field col s12 m6 l3">
        <input
          autoFocus
          id={id}
          value={formattedValue}
          readOnly
          style={{ color, fontWeight: 'bold' }}
        />
        <label className="active" htmlFor="inputReadOnly">
          {label}
        </label>
      </div>
    );
  }
}
