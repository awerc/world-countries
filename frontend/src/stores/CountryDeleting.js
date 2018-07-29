/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

import AjaxService from '../services/AjaxService';
import Modals from './Modals';
import CountriesList from './CountriesList';
import ConfirmationModal from './ConfirmationModal';

const CountryDeleting = types.model('countryDeleting', {
}).actions(() => {
  const deleteCountry = id => {
    AjaxService.delete(`country/${id}`)
      .then(() => {
        CountriesList.removeCountry(id);
        Modals.toggleModal('confirmationModal');
      })
      .catch(() => {
        Modals.toggleModal('confirmationModal');
      });
  };

  return {
    deleteCountry(id) {
      ConfirmationModal.openModal(
        'Удаление страны',
        `Вы действительно хотите удалить страну "${CountriesList.country(id).name}" ?`,
        () => deleteCountry(id)
      );
    }
  };
});

const CountryDeletingStore = CountryDeleting.create();

export default CountryDeletingStore;
