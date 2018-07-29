import React from 'react';
import PropTypes from 'prop-types';

const CountryInfo = ({ flag, name, continent, capital, population, area, description }) => (
  <div className="country-info">
    <div className="name title">{name}</div>
    <img className="flag" src={flag} alt={`флаг ${name}`} />
    <div className="info">
      <div className="continent"><b>Континент:</b> {continent}</div>
      <div className="capital"><b>Столица:</b> {capital}</div>
      <div className="population"><b>Население:</b> {population.toLocaleString()} чел.</div>
      <div className="area"><b>Площадь:</b> {area.toLocaleString()} км<sup>2</sup></div>
    </div>
    <div className="description">{description}</div>
  </div>
);

CountryInfo.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  continent: PropTypes.string,
  capital: PropTypes.string,
  population: PropTypes.number,
  area: PropTypes.number,
  description: PropTypes.string,
};

export default CountryInfo;
