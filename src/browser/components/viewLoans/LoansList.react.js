import Component from 'react-pure-render/component';
import React, {PropTypes as RPT} from 'react';
import Loan from './Loan.react';
import './LoansList.scss';

class LoansList extends Component {

  static propTypes = {
    msg: RPT.object,
    loans: RPT.object,
    calculateExtendLoan: RPT.func,
    calculateDeleteLoan: RPT.func,
    inTotal: RPT.string
  };

  getAmount(loans, fieldToReduce) {
    const loansArray = Object.keys(loans).map((key) => loans[key]);

    return loansArray.reduce(
      (previousValue, currentValue) => previousValue + parseFloat(currentValue[fieldToReduce]),
      0)
    .toFixed(2);
  }

  render() {
    const {loans, calculateExtendLoan, inTotal, calculateDeleteLoan} = this.props;
    const totalAmount = this.getAmount(loans.toJS(), 'amount'),
      totalReturnAmount = this.getAmount(loans.toJS(), 'returnAmount');

    console.log('RERENDER list');

    return (
      <div>
        <table className="loansList">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Amount to return</th>
              <th>+1 week</th>
              <th>View loan info</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { loans.size ?
                loans.map((loan) =>
                  <Loan
                    id={loan.get('id')}
                    loan={loan}
                    key={loan.get('id')}
                    calculateExtendLoan={calculateExtendLoan}
                    calculateDeleteLoan={calculateDeleteLoan}
                  />)
              : null
            }
            <tr>
                <td>{inTotal}</td>
                <td>{totalAmount}EUR</td>
                <td>{totalReturnAmount}EUR</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LoansList;
