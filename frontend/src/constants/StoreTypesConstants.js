import { types } from 'mobx-state-tree';

import Status from '../constants/StatusConstants';

const StatusType = types.optional(types.enumeration(
  'status',
  [Status.LOADING, Status.SUCCESS, Status.ERROR, Status.NO_RESULTS, Status.DEFAULT]
), Status.DEFAULT);

const Continent = types.optional(types.enumeration(
  'continent',
  ['', 'Азия', 'Европа', 'Южная Америка', 'Северная Америка', 'Австралия', 'Африка']
), '');

const SortField = types.optional(types.enumeration(
  'sortField',
  ['name', 'area', 'population']
), 'name');

const Sort = types.model('sort', {
  field: SortField,
  direction: true
});

const Params = types.model('params', {
  offset: 0,
  count: 10,
  search: '',
  sort: Sort,
  filter: Continent
});

const Country = types.model({
  id: -1,
  flag: '',
  name: '',
  capital: '',
  area: 0,
  population: 0,
  continent: '',
  description: '',
});

export { StatusType, Continent, Params, Country };
