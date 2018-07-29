/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const Modals = types.model('modals', {
  active: '',
}).actions(self => ({
  toggleModal(modal) {
    if (self.active === modal) {
      self.active = '';
      return;
    }
    self.active = modal;
  },
  clearState() {
    self.active = '';
  }
}));

const ModalsStore = Modals.create();

export default ModalsStore;
