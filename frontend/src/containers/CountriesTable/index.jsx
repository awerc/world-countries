import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Table, Glyphicon } from 'react-bootstrap';

import { Link } from '../../components/Router/index';
import './style.less';

const CountriesTable = ({ data, field, direction, onSort, onDelete }) => {
  const sortableThClassNames = fieldName => classNames(
    'col-md-2',
    {
      sorted: field === fieldName,
      reverse: !direction && field === fieldName
    }
  );

  return (
    <Table className="countries-table">
      <thead>
        <tr>
          <th className="col-md-1" />
          <th className={sortableThClassNames('name')} onClick={() => onSort('name')}>
            Название
          </th>
          <th className="col-md-2">Континент</th>
          <th className="col-md-2">Столица</th>
          <th className={sortableThClassNames('population')} onClick={() => onSort('population')}>
            Население, чел
          </th>
          <th className={sortableThClassNames('area')} onClick={() => onSort('area')}>
            Площадь, км<sup>2</sup>
          </th>
          <th className="col-md-1" />
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, flag, name, continent, capital, population, area }) => (
          <tr key={id}>
            <td>
              <Link to={`/Country/${id}`}>
                <img src={flag} alt={`флаг ${name}`} />
              </Link>
            </td>
            <td>
              <Link to={`/Country/${id}`}>{name}</Link>
            </td>
            <td>{continent}</td>
            <td>{capital}</td>
            <td>{population.toLocaleString()}</td>
            <td>{area.toLocaleString()}</td>
            <td><Glyphicon glyph="remove" onClick={onDelete(id)} /></td>
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
