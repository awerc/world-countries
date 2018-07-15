import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'Components/Router/index';
import { ScrollTop } from 'Components/index';

import Modal from '../../Common/Containers/Modal';
import Form from '../Components/CountryCreationForm';

import logo from '../../../Images/logo.png';

@inject('modals', 'countryCreation')
@observer
class Layout extends Component {
  constructor(props) {
    super(props);

    this.componentDidUpdate = prevProps => {
      if (this.props.location !== prevProps.location && prevProps.history.action === 'PUSH') {
        window.scrollTo(0, 0);
      }
    };
  }

  render() {
    const {
      children,
      modals: { toggleModal },
      countryCreation: { status, createCountry }
    } = this.props;

    const toggleCreationModal = () => toggleModal('countryCreation');

    return (
      <div className="layout">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="логотип" className="logo" height={130} />
            <div className="logo-title">Страны мира</div>
          </Link>
        </div>
        <div className="layout-content">{children}</div>
        <ScrollTop />
        <Modal status={status} title="Добавление страны" type="countryCreation">
          <Form
            onSubmit={country => createCountry(country)}
            onCancel={toggleCreationModal}
          />
        </Modal>
      </div>
    );
  }
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node
};
Layout.wrappedComponent.propTypes = {
  modals: PropTypes.object.isRequired,
  countryCreation: PropTypes.object.isRequired
};

export default Layout;
