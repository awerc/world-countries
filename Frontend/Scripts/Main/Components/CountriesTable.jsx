import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { Link } from 'Components/Router';

const CountriesTable = ({ data, field, direction, onSort, onDelete }) => {
  const thClassNames = fieldName => ClassNames(
    'col-md-2',
    {
      sorted: field === fieldName,
      reverse: !direction && field === fieldName
    });

  return (
    <Table className="countries-table">
      <thead>
        <tr>
          <th className="col-md-1" />
          <th className={thClassNames('name')} onClick={() => onSort('name')}>
            Название
          </th>
          <th className="col-md-2">Континент</th>
          <th className="col-md-2">Столица</th>
          <th className={thClassNames('population')} onClick={() => onSort('population')}>
            Население, чел
          </th>
          <th className={thClassNames('area')} onClick={() => onSort('area')}>
            Площадь, км<sup>2</sup>
          </th>
          <th className="col-md-1" />
        </tr>
      </thead>
      <tbody>
        {data.map(country => (
          <tr key={country.id}>
            <td>
              <Link to={`/Country/${country.id}`}>
                <img src={country.flag} alt={`флаг ${country.name}`} />
              </Link>
            </td>
            <td>
              <Link to={`/Country/${country.id}`}>{country.name}</Link>
            </td>
            <td>{country.continent}</td>
            <td>{country.capital}</td>
            <td>{country.population.toLocaleString()}</td>
            <td>{country.area.toLocaleString()}</td>
            <td><span className="glyphicon glyphicon-remove" onClick={() => onDelete(country.id)} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CountriesTable.propTypes = {
  direction: PropTypes.bool,
  field: PropTypes.string,
  data: PropTypes.array,
  onSort: PropTypes.func,
  onDelete: PropTypes.func
};

export default CountriesTable;
