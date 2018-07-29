import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react/index';
import { Button } from 'react-bootstrap';
import Container, { Header, Title, Body } from 'react-bootstrap/lib/Modal';

@inject('modals', 'confirmationModal')
@observer
class ConfirmationModal extends Component {
  constructor(props) {
    super(props);
    const { toggleModal, clearState } = this.props.modals;

    this.toggleModal = () => toggleModal('confirmationModal');
    this.componentWillUnmount = () => clearState();
  }

  render() {
    const { title, message, onConfirm } = this.props.confirmationModal;
    const { active } = this.props.modals;

    return (
      <Container show={active === 'confirmationModal'} onHide={this.toggleModal}>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <div>{message}</div>
          <div className="controls">
            <Button bsStyle="link" onClick={this.toggleModal}>
              Отмена
            </Button>
            <Button bsStyle="primary" onClick={onConfirm()}>
              Да
            </Button>
          </div>
        </Body>
      </Container>
    );
  }
}

ConfirmationModal.wrappedComponent.propTypes = {
  modals: PropTypes.object.isRequired,
  confirmationModal: PropTypes.object.isRequired,
};

export default ConfirmationModal;
