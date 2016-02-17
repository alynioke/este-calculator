import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './addLoan.scss';
import LoanForm from './LoanForm.react';

class Page extends Component {

  static propTypes = {
    msg: PropTypes.object
  };

  render() {
    const {msg} = this.props;

    return (
      <div className="take-loan-page">
        <Helmet title={msg.title} />

        <LoanForm />
      </div>
    );
  }
}


export default connect(state => ({
  msg: state.intl.msg.todos
}))(Page);
