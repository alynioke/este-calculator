import Component from 'react-pure-render/component';
import React, {PropTypes as RPT} from 'react';
import {Link} from 'react-router';

class Loan extends Component {

  static propTypes = {
    loan: RPT.object,
    calculateExtendLoan: RPT.func,
    calculateDeleteLoan: RPT.func,
    id: RPT.string
  };

  constructor(props) {
    super(props);
    this.onExtendLoan = this.onExtendLoan.bind(this);
    this.onDeleteLoan = this.onDeleteLoan.bind(this);
  }

  onExtendLoan() {
    this.props.calculateExtendLoan(this.props.id);
  }

  onDeleteLoan() {
    this.props.calculateDeleteLoan(this.props.id);
  }

  render() {
    const {amount, returnAmount} = this.props.loan.toJSON();
    const date = this.props.loan.get('date').toString();
    const id = this.props.id;

    return (
      <tr>
        <td>{date}</td>
        <td>{parseFloat(amount).toFixed(2)}EUR</td>
        <td>{parseFloat(returnAmount).toFixed(2)}EUR</td>
        <td><button onClick={this.onExtendLoan}>Extend</button></td>
        <td><Link activeClassName="active" to={`/view-loans/${id}`}>View</Link></td>
        <td className="pointer" onClick={this.onDeleteLoan}>X</td>
      </tr>
    );
  }
}
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md

export default Loan;
