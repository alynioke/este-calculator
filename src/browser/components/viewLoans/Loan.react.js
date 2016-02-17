import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {calculateReturnAmount} from '../../../common/loans/consts';

class Loan extends Component {

  static propTypes = {
    loan: PropTypes.object
  };

  render() {
    const {name, days, iban, date, amount} = this.props.loan.toJSON();

    return (
      <li>
        On {date} user {name} took {amount}EUR for {days} days. Money transferred to IBAN#{iban}.
        Client needs to return {calculateReturnAmount(amount, days)}EUR
      </li>
    );
  }

}

export default Loan;
