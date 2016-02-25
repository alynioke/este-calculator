import React, {PropTypes as RPT} from 'react';
import {Link} from 'react-router';

class NavLink extends React.Component {

  static propTypes = {
    children: RPT.string
  };

  render() {
    return (
      <Link {...this.props} activeClassName="active">{this.props.children}</Link>
    );
  }
}

export default NavLink;
