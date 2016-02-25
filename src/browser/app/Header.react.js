import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import NavLink from './NavLink'

class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  };

  render() {
    const {msg, viewer} = this.props;
    const bb = 3;

    return (
      <header>
        <ul>
          <li>
            <IndexLink activeClassName="active" to="/">{msg.addLoan}</IndexLink>
          </li>
          <li>
            <NavLink to="/view-loans">{msg.viewLoans}</NavLink>
          </li>
          <li>
            <NavLink to="/old-any-page/p1/p2">About</NavLink>
          </li>
        </ul>
      </header>
    );
  }

}

export default connect(state => ({
  msg: state.intl.msg.app.links,
  viewer: state.users.viewer
}))(Header);
