/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';
import modals from './Modals';

const ConfirmationModal = types.model('countryDeleting', {
  message: '',
  title: ''
}).actions(self => {
  let callback = function qwe() {
    return true;
  };

  return {
    onConfirm() {
      return callback;
    },

    openModal(title, message, qwe) {
      self.title = title;
      self.message = message;
      callback = qwe;
      console.log(callback);
      modals.toggleModal('confirmationModal');
    },

    clearState() {
      self.title = '';
      self.message = '';
      callback = null;
    }
  };
});

const ConfirmationModalStore = ConfirmationModal.create();

export default ConfirmationModalStore;
