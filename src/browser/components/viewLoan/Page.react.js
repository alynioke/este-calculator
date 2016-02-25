import Component from 'react-pure-render/component';
import React, {PropTypes as RPT} from 'react';
import {connect} from 'react-redux';

class ViewLoan extends Component {
  static propTypes = {
    loans: RPT.object,
    params: RPT.object
  };

  render() {
    const {id} = this.props.params;
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
