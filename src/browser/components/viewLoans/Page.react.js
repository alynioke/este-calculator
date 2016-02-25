import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes as RPT} from 'react';
import {connect} from 'react-redux';
import LoansList from './LoansList.react';
import * as loanActions from '../../../common/loans/actions';

class Page extends Component {

  static propTypes = {
    msg: RPT.object,
    loans: RPT.object,
    calculateExtendLoan: RPT.func,
    calculateDeleteLoan: RPT.func,
    inTotal: RPT.string,
    setSomething: RPT.func,
    children: RPT.object
  };

  // constructor(props) {
  //   super(props);
  //   this.onSetSomething = this.onSetSomething.bind(this);
  // }

  // onSetSomething() {
  //   this.props.setSomething({what:'loans', where: ['currentLoan', 'days'], value: '87'});
  // }

  render() {
    const {msg, setSomething} = this.props;

    return (
      <div className="todos-page">
        <Helmet title={msg.title}/>
        <LoansList {...this.props} />
        {this.props.children}
      </div>
    );
  }
}
// <button
//   className="setSomething"
//   onClick={this.onSetSomething}
// >
//   SET any Record value inside state tree to any value
// </button>
export default connect(state => ({
  msg: state.intl.msg.todos,
  inTotal: state.intl.msg.addLoan.inTotal,
  loans: state.loans.loans
}), loanActions)(Page);
