/* eslint-disable no-param-reassign */
import { types, flow } from 'mobx-state-tree';

import Status from '../constants/StatusConstants';
import AjaxService from '../services/AjaxService';
import { StatusType, Country } from '../constants/StoreTypesConstants';

const SingleCountry = types.model('singleCountry', {
  data: Country,
  status: StatusType,
})
.actions(self => ({
  loadCountry: flow(function* loadCountry(id) {
    self.status = Status.LOADING;

    try {
      const response = yield AjaxService.get(`country/${id}`);

      self.data = response.data;
      self.status = Status.SUCCESS;
    } catch (error) {
      self.status = Status.ERROR;
    }
  }),

  clearState() {
    self.data = {};
    self.status = Status.LOADING;
  }
}));

const SingleCountryStore = SingleCountry.create({
  data: {},
  status: Status.LOADING
});

export default SingleCountryStore;
