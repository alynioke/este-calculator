import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Loan from './Loan.react';
import './LoansList.scss';

class LoansList extends Component {

  static propTypes = {
    msg: PropTypes.object,
    loans: PropTypes.object,
    calculateExtendLoan: PropTypes.func,
    inTotal: PropTypes.string
  };

  render() {
    const {loans, calculateExtendLoan, inTotal} = this.props;
    const loansLi = loans.size
      ? loans.map((loan, id) => <Loan
          loan={loan}
          id={id}
          calculateExtendLoan={calculateExtendLoan}
        />)
      : '';
    const totalAmount = 1, totalReturnAmount = 2;

    return (
        <table className="loansList">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Interest</th>
              <th>IBAN #</th>
              <th>Amount to return</th>
              <th>+1 week</th>
            </tr>
          </thead>
          <tbody>
            {loansLi}
            <tr>
                <td>{inTotal}</td>
                <td>{totalAmount}EUR</td>
                <td></td>
                <td></td>
                <td>{totalReturnAmount}EUR</td>
                <td></td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default LoansList;
