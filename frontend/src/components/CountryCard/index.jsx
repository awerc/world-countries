import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Router';
import './style.less';

const CountryCard = ({ id, flag, name, continent, capital, population, area }) => (
  <div className="country-card">
    <Link className="name" to={`/Country/${id}`}>
      <img className="flag" src={flag} alt={`флаг ${name}`} />
    </Link>
    <Link className="name" to={`/Country/${id}`}>{name}</Link>
    <div className="continent">{continent}</div>
    <div className="capital"><b>Столица:</b> {capital}</div>
    <div className="population"><b>Население:</b> {population.toLocaleString()} чел.</div>
    <div className="area"><b>Площадь:</b> {area.toLocaleString()} км<sup>2</sup></div>
  </div>
);

CountryCard.propTypes = {
  id: PropTypes.number,
  flag: PropTypes.string,
  name: PropTypes.string,
  continent: PropTypes.string,
  capital: PropTypes.string,
  population: PropTypes.number,
  area: PropTypes.number,
};

export default CountryCard;
