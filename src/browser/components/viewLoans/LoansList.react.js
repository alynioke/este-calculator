import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import Loan from './Loan.react';
import './LoansList.scss';

class LoansList extends Component {

  static propTypes = {
    msg: PropTypes.object,
    loans: PropTypes.object,
    calculateExtendLoan: PropTypes.func,
    calculateDeleteLoan: React.PropTypes.func,
    inTotal: PropTypes.string
  };

  getAmount(loans, fieldToReduce) {
    const amount = loans.size > 1
      ? loans.reduce(function(prev, next) {
        var prev = typeof prev === 'number' ? prev : prev.get(fieldToReduce),
          next = typeof next === 'number' ? next : next.get(fieldToReduce);
        return parseFloat(prev) + parseFloat(next);
      })
      : loans.first().get(fieldToReduce);

    return parseFloat(amount).toFixed(2);
  }

  render() {
    const {loans, calculateExtendLoan, inTotal, calculateDeleteLoan} = this.props;
    const totalAmount = this.getAmount(loans, 'amount'),
      totalReturnAmount = this.getAmount(loans, 'returnAmount');

    return (
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
                loans.map((loan, id) =>
                  <Loan
                    loan={loan}
                    id={id}
                    key={id}
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
    );
  }
}

export default LoansList;
