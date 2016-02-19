import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../common/loans/actions';

class LoanInputs extends Component {
  static propTypes = {
    msgAddLoan: PropTypes.object,
    currentLoan: PropTypes.object.isRequired,
    calculateSetValue: React.PropTypes.func,
    calculateAddLoan: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.calculateSetValue = this.calculateSetValue.bind(this);
    this.calculateAddLoan = this.calculateAddLoan.bind(this);
  }

  calculateSetValue(e) {
    const {calculateSetValue} = this.props;
    const {name, value} = e.target;

    calculateSetValue(name, value);
  }

  calculateAddLoan() {
    const {calculateAddLoan} = this.props;

    calculateAddLoan();
  }

  render() {
    const {msgAddLoan, currentLoan} = this.props;
    const {amount, days, interest, iban, returnAmount} = currentLoan.toJSON();

    return (
      <div>
        <div className="new-loan">
          <div>
            <label htmlFor="amount">{msgAddLoan.amount}</label>
            <input
              id="amount"
              onChange={this.calculateSetValue}
              name="amount"
              type="number"
              min="1"
              max="500"
              value={amount}
            />
          </div>
          <div>
            <label htmlFor="days">{msgAddLoan.days}</label>
            <input
              id="days"
              onChange={this.calculateSetValue}
              name="days"
              type="number"
              min="1"
              max="60"
              value={days}
            />
          </div>
          <div>
            <label htmlFor="interest">{msgAddLoan.interest}, %</label>
            <input
              id="interest"
              onChange={this.calculateSetValue}
              name="interest"
              type="text"
              value={interest}
            />
          </div>
          <div>
            <label htmlFor="iban">{msgAddLoan.iban}</label>
            <input
              id="iban"
              onChange={this.calculateSetValue}
              name="iban"
              type="text"
              value={iban}
            />
          </div>
        </div>

        <div>
            {msgAddLoan.returnAmount} {returnAmount} EUR
        </div>

        <button onClick={this.calculateAddLoan}>{msgAddLoan.apply}</button>

      </div>
    );
  }
}


export default connect(state => ({
  msgAddLoan: state.intl.msg.addLoan,
  currentLoan: state.loans.currentLoan
}), actions)(LoanInputs);
