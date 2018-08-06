import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../../components/Router/index';
import './style.less';

const CountryCard = ({ country }) => (
  <div className="country-card">
    <Link className="name" to={`/Country/${country.id}`}>
      <img className="flag" src={country.flag} alt={`флаг ${name}`} />
    </Link>
    <Link className="name" to={`/Country/${country.id}`}>{name}</Link>
    <div className="continent">{country.continent}</div>
    <div className="capital"><b>Столица:</b> {country.capital}</div>
    <div className="population"><b>Население:</b> {country.population.toLocaleString()} чел.</div>
    <div className="area"><b>Площадь:</b> {country.area.toLocaleString()} км<sup>2</sup></div>
  </div>
);

CountryCard.propTypes = {
  country: PropTypes.object
};

export default CountryCard;
