import React, { Component } from 'react';
import './App.css';
import InputFullSalary from './components/InputFullSalary';
import { calculateSalaryFrom } from './helpers/salary';
import InputReadOnly from './components/InputReadOnly';

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
    const salarioHelper = calculateSalaryFrom(fullSalary);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = salarioHelper;

    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row">
          <InputFullSalary
            currentValue={fullSalary}
            onSalaryChange={this.handleFullSalaryChange}
          />
        </div>

        <div className="row">
          <InputReadOnly label="Base INSS" value={baseINSS} />
          <InputReadOnly
            label="Desconto INSS"
            value={discountINSS}
            percentage={percentINSS}
          />
          <InputReadOnly label="Base IRPF" value={baseIRPF} />
          <InputReadOnly
            label="Desconto IRPF"
            value={discountIRPF}
            percentage={percentIRPF}
          />
          <InputReadOnly
            label="Salário líquido"
            value={netSalary}
            percentage={percentNetSalary}
          />
        </div>
      </div>
    );
  }
}

export default App;
