import { STATUS_ERROR, STATUS_LOADING, STATUS_NO_RESULTS, STATUS_SUCCESS, STATUS_DEFAULT } from 'Constants/StatusConstants';
import { types } from 'mobx-state-tree';

const Status = types.optional(types.enumeration(
  'status',
  [STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR, STATUS_NO_RESULTS, STATUS_DEFAULT]
), STATUS_DEFAULT);

const Continent = types.optional(types.enumeration(
  'continent',
  ['', 'Азия', 'Европа', 'Южная Америка', 'Северная Америка', 'Австралия', 'Африка']
), '');

const SortField = types.optional(types.enumeration(
  'sortField',
  ['name', 'area', 'population']
), 'name');

const View = types.optional(types.enumeration(
  'view',
  ['table', 'cards']
), 'table');

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

export { Status, Continent, Params, View, Country };
