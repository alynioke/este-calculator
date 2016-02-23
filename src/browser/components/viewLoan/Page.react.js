import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import fetch from '../../../common/components/fetch';
import {connect} from 'react-redux';
import * as loanActions from '../../../common/loans/actions';

class ViewLoan extends Component {
  static propTypes = {
    loans: React.PropTypes.object
  };

  render() {
    const { id } = this.props.params;
    const {date, amount, interest, iban, returnAmount} = this.props.loans.toJSON()[id];

    return (
      <div className="todos-page">
        <table className="loansList">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Interest</th>
              <th>IBAN #</th>
              <th>Amount to return</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{date}</td>
                <td>{amount}EUR</td>
                <td>{interest}%</td>
                <td>{iban}</td>
                <td>{returnAmount}EUR</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(state => ({
  loans: state.loans.loans
}))(ViewLoan);
