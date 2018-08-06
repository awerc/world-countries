import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

import { ViewTypes } from '../../constants/CountriesListConstants';
import CountriesTable from '../CountriesTable';
import CountryCard from '../CountryCard';
import './style.less';

class CountriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: ViewTypes.table
    };
  }

  handleViewChange = view => () => {
    this.setState({ view });
  };

  render() {
    const { countries, field, direction, onSort, onDelete } = this.props;
    const { view } = this.state;

    return (
      <div className="countries-list">
        <ButtonGroup className="view-controls">
          <Button
            bsStyle="default"
            active={view === ViewTypes.table}
            onClick={this.handleViewChange(ViewTypes.table)}
          >
            <Glyphicon glyph="th-list" />
          </Button>
          <Button
            bsStyle="default"
            active={view === ViewTypes.cards}
            onClick={this.handleViewChange(ViewTypes.cards)}
          >
            <Glyphicon glyph="th-large" />
          </Button>
        </ButtonGroup>

        {view === ViewTypes.table && (
          <CountriesTable
            data={countries}
            field={field}
            direction={direction}
            onSort={onSort}
            onDelete={onDelete}
          />
        )}
        {view === ViewTypes.cards && (
          <div className="countries-cards">
            {countries.map(country => (
              <CountryCard coutry={country} key={country.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

CountriesList.propTypes = {
  field: PropTypes.string,
  view: PropTypes.string,
  direction: PropTypes.bool,
  countries: PropTypes.array,
  onSort: PropTypes.func,
  onDelete: PropTypes.func,
  onChangeView: PropTypes.func
};

export default CountriesList;
