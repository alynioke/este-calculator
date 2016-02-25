import Component from 'react-pure-render/component';
import React, {PropTypes as RPT} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import NavLink from './NavLink'

class Header extends Component {

  static propTypes = {
    msg: RPT.object.isRequired,
    pathname: RPT.string.isRequired,
    viewer: RPT.object
  };

  render() {
    const {msg} = this.props;

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
