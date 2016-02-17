import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import fetch from '../../../common/components/fetch';
import {connect} from 'react-redux';
import Loan from './Loan.react';

class Page extends Component {

  static propTypes = {
    msg: PropTypes.object,
    loans: PropTypes.object
  };

  render() {
    const {msg, loans} = this.props;

    const loansLi = loans.size
      ? loans.map(loan => <Loan loan={loan}/>)
      : <li>No loans. Lucky you!</li>;

    return (
      <div className="todos-page">
        <Helmet title={msg.title} />
        <ul>
          {loansLi}
        </ul>
      </div>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.todos,
  loans: state.loans.loans
}))(Page);
