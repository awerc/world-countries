import { STATUS_LOADING } from 'Constants/StatusConstants';

const countriesInitialState = {
  data: [],
  status: STATUS_LOADING,
  params: {
    sort: {}
  },
  view: 'table'
};

const singleCountryInitialState = {
  data: {},
  status: STATUS_LOADING
};

const continents = [
  'Азия',
  'Европа',
  'Южная Америка',
  'Северная Америка',
  'Австралия',
  'Африка',
];

const options = continents.map(continent => ({ value: continent, name: continent }));
options.unshift({ value: '', name: 'Все' });

export { countriesInitialState, singleCountryInitialState, continents, options };
