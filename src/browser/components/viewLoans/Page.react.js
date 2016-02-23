import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import fetch from '../../../common/components/fetch';
import {connect} from 'react-redux';
import Loan from './Loan.react';
import LoansList from './LoansList.react';
import * as loanActions from '../../../common/loans/actions';

class Page extends Component {

  static propTypes = {
    msg: React.PropTypes.object,
    loans: React.PropTypes.object,
    calculateExtendLoan: React.PropTypes.func,
    calculateDeleteLoan: React.PropTypes.func,
    inTotal: React.PropTypes.string
  };

  render() {
    const {msg} = this.props;

    return (
      <div className="todos-page">
        <Helmet title={msg.title}/>

        <LoansList {...this.props} />
      </div>
    );
  }
}

export default connect(state => ({
  msg: state.intl.msg.todos,
  inTotal: state.intl.msg.addLoan.inTotal,
  loans: state.loans.loans
}), loanActions)(Page);
