/* eslint-disable no-param-reassign */
import { types, flow } from 'mobx-state-tree';
import { STATUS_ERROR, STATUS_LOADING, STATUS_SUCCESS } from 'Constants/StatusConstants';
import { getRequest } from 'Services/AjaxService';

import { Status, Country } from '../Constants/StoreTypesConstants';
import { singleCountryInitialState } from '../Constants/StoreConstants';

const SingleCountry = types.model('singleCountry', {
  data: Country,
  status: Status,
})
.actions(self => ({
  loadCountry: flow(function* loadCountry(id) {
    self.status = STATUS_LOADING;

    try {
      const response = yield getRequest(`country/${id}`);

      self.data = response.data;
      self.status = STATUS_SUCCESS;
    } catch (error) {
      self.status = STATUS_ERROR;
      console.log(error);
    }
  }),

  clearState() {
    self.data = singleCountryInitialState.data;
    self.status = singleCountryInitialState.status;
  }
}));

const SingleCountryStore = SingleCountry.create(singleCountryInitialState);

export default SingleCountryStore;
