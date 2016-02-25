import './App.scss';
import Component from 'react-pure-render/component';
import Header from './Header.react';
import Helmet from 'react-helmet';
import React, {PropTypes as RPT} from 'react';

export default class App extends Component {

  static propTypes = {
    children: RPT.object.isRequired,
    location: RPT.object.isRequired
  };

  render() {
    const {children, location} = this.props;

    return (
      // Pass data-pathname to allow route specific styling.
      <div className="page" data-pathname={location.pathname}>
        <Helmet
          link={[
            {rel: 'shortcut icon', href: require('./favicon.ico')}
          ]}
          meta={[{
            name: 'description',
            content: 'Dev stack and starter kit for functional and universal React web apps'
          }]}
          titleTemplate="%s - Este.js"
        />
        <Header pathname={location.pathname}/>
        {children}
      </div>
    );
  }

}
