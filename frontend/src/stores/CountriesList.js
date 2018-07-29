/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { types, flow } from 'mobx-state-tree';

import Status from '../constants/StatusConstants';
import AjaxService from '../services/AjaxService';
import { includes, comparer } from '../utils/StoreUtils';
import { StatusType, Params, Country } from '../constants/StoreTypesConstants';

const CountriesList = types.model('countriesList', {
  data: types.optional(types.array(Country), []),
  status: StatusType,
  params: Params
}).views(self => {
  const filterCountries = () => self.data
    .filter(country => includes(country.name, self.params.search))
    .filter(country => includes(country.continent, self.params.filter));

  return {
    get countries() {
      const { offset, count, sort: { field, direction } } = self.params;
      const end = offset + count;

      return filterCountries()
        .sort(comparer(field, direction))
        .slice(offset, end);
    },
    get total() {
      return filterCountries().length;
    },
    country(id) {
      return _.find(self.data, { id });
    }
  };
}).actions(self => ({
  addCountry(country) {
    self.data.push(country);
  },

  removeCountry(id) {
    self.data = self.data.filter(country => country.id !== id);
  },

  loadCountries: flow(function* loadCountries() {
    self.status = Status.LOADING;
    try {
      const response = yield AjaxService.get('countries');

      const data = _.get(response, 'data.data', []);
      self.data = data;
      self.status = data.length > 0 ? Status.SUCCESS : Status.NO_RESULTS;
    } catch (error) {
      self.status = Status.ERROR;
    }
  }),

  paramsChange(key, value) {
    if (key === 'sort') {
      if (self.params.sort.field === value) {
        self.params.sort.direction = !self.params.sort.direction;
        return;
      }

      self.params.sort.field = value;
      self.params.sort.direction = true;
      return;
    }

    self.params[key] = value;
    if (key === 'count' || key === 'search' || key === 'filter') self.params.offset = 0;
  }
}));

const CountriesListStore = CountriesList.create({
  data: [],
  status: Status.LOADING,
  params: {
    sort: {}
  },
  view: 'table'
});

export default CountriesListStore;
