import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/index';
import Container, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';

import { OverlayLoader } from '../../components';
import './style.less';

@inject('modals')
@observer
class Modal extends Component {
  componentWillUnmount = () => this.props.modals.clearState();

  toggleModal = () => {
    const { modals: { toggleModal }, type } = this.props;

    toggleModal(type);
  };

  render() {
    const { modals: { active }, type, title, children, footer, status } = this.props;

    return (
      <Container show={type === active} onHide={this.toggleModal}>
        <OverlayLoader status={status}>
          <Header closeButton>
            <Title>{title}</Title>
          </Header>
          <Body>
            {children}
          </Body>
          {footer && <Footer>{footer}</Footer>}
        </OverlayLoader>
      </Container>
    );
  }
}

Modal.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node
};

Modal.wrappedComponent.propTypes = {
  modals: PropTypes.object.isRequired,
};

export default Modal;
