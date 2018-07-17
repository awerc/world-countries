import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'Components/Router/index';

import logo from '../../../Images/logo.png';

class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && prevProps.history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="логотип" className="logo" height={130} />
            <div className="logo-title">Страны мира</div>
          </Link>
        </div>
        <div className="layout-content">{children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
};

export default Layout;
