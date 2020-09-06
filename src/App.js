import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFullSalary from './components/InputFullSalary';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
  };

  render() {
    const { fullSalary } = this.state;

    return (
      <div className="container">
        <h1>React Salário</h1>
        <div clasName="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
