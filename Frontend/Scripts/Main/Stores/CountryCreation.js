/* eslint-disable no-param-reassign */
import { types, flow } from 'mobx-state-tree';
import { STATUS_ERROR, STATUS_LOADING, STATUS_SUCCESS, STATUS_DEFAULT } from 'Constants/StatusConstants';
import AjaxService from 'Services/AjaxService';

import { Status } from '../Constants/StoreTypesConstants';

import CountriesList from './CountriesList';
import Modals from './Modals';

const CountryCreation = types.model('countryCreation', {
  status: types.optional(Status, STATUS_DEFAULT),
}).actions(self => ({
  createCountry: flow(function* createCountry(country) {
    self.status = STATUS_LOADING;

    try {
      const response = yield AjaxService.post('countries', country);

      self.status = STATUS_SUCCESS;
      CountriesList.addCountry({ ...country, id: response.data.id });

      setTimeout(() => {
        Modals.toggleModal('countryCreation');
        self.clearState();
      }, 1000);
    } catch (error) {
      self.status = STATUS_ERROR;
      setTimeout(self.clearState, 1000);
      console.log(error);
    }
  }),

  clearState() {
    self.status = STATUS_DEFAULT;
  }
}));

const CountryCreationStore = CountryCreation.create();

export default CountryCreationStore;
