import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const {msg, viewer} = this.props;

    return (
      <header>
        <ul>
          <li><Link activeClassName="active" to="/">{msg.addLoan}</Link></li>
          <li><Link activeClassName="active" to="/view-loans">{msg.viewLoans}</Link></li>
        </ul>
      </header>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.app.links,
  viewer: state.users.viewer
}))(Header);
