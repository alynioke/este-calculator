import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';

class Loan extends Component {

  static propTypes = {
    loan: React.PropTypes.object,
    calculateExtendLoan: React.PropTypes.func,
    id: React.PropTypes.number
  };

  constructor(props) {
    super(props);
    this.onExtendLoan = this.onExtendLoan.bind(this);
  }

  onExtendLoan() {
    const {calculateExtendLoan} = this.props;
    const id = this.props.id;

    calculateExtendLoan(id);
  }

  render() {
    const {interest, days, iban, amount, returnAmount} = this.props.loan.toJSON();
    const date = this.props.loan.get('date').toString();

    return (
      <tr>
        <td>{date}</td>
        <td>{amount}EUR</td>
        <td>{interest}%</td>
        <td>{iban}</td>
        <td>{returnAmount}EUR</td>
        <td><button onClick={this.onExtendLoan}>Extend</button></td>
      </tr>
    );
  }

}

export default Loan;
