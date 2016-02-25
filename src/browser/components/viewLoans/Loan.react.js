import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class Loan extends Component {

  static propTypes = {
    loan: React.PropTypes.object,
    calculateExtendLoan: React.PropTypes.func,
    calculateDeleteLoan: React.PropTypes.func,
    id: React.PropTypes.number
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log('RERENDER loan' + this.props.id);
    const {interest, days, iban, amount, returnAmount} = this.props.loan.toJSON(),
      date = this.props.loan.get('date').toString(),
      id = this.props.id;

    return (
      <tr>
        <td>{date}</td>
        <td>{parseFloat(amount).toFixed(2)}EUR</td>
        <td>{parseFloat(returnAmount).toFixed(2)}EUR</td>
        <td><button onClick={() => this.props.calculateExtendLoan(id)}>Extend</button></td>
        <td><Link activeClassName="active" to={'/view-loans/'+id}>View</Link></td>
        <td className="pointer" onClick={() => this.props.calculateDeleteLoan(id)}>X</td>
      </tr>
    );
  }
}

export default Loan;
