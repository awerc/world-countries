/* eslint-disable no-param-reassign */
import { types, flow } from 'mobx-state-tree';

import Status from '../constants/StatusConstants';
import AjaxService from '../services/AjaxService';
import { StatusType } from '../constants/StoreTypesConstants';
import CountriesList from './CountriesList';
import Modals from './Modals';

const CountryCreation = types.model('countryCreation', {
  status: types.optional(StatusType, Status.DEFAULT),
}).actions(self => ({
  createCountry: flow(function* createCountry(country) {
    self.status = Status.LOADING;

    try {
      const response = yield AjaxService.post('countries', country);

      self.status = Status.SUCCESS;
      CountriesList.addCountry({ ...country, id: response.data.id });

      setTimeout(() => {
        Modals.toggleModal('countryCreation');
        self.clearState();
      }, 1000);
    } catch (error) {
      self.status = Status.ERROR;
      setTimeout(self.clearState, 1000);
    }
  }),

  clearState() {
    self.status = Status.DEFAULT;
  }
}));

const CountryCreationStore = CountryCreation.create();

export default CountryCreationStore;
