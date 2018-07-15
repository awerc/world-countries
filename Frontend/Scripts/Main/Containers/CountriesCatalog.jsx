import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';
import { Pagination, ContentStatus, SearchInput, SelectInput } from 'Components';

import { options } from '../Constants/StoreConstants';
import CountriesList from '../Components/CountriesList';

const DATA_COUNTS = [5, 10, 25];

@inject('countriesList', 'modals')
@observer
class CountriesCatalog extends Component {
  constructor(props) {
    super(props);

    const { loadCountries, paramsChange } = this.props.countriesList;

    this.onPageChange = offset => paramsChange('offset', offset);
    this.onCountChange = count => paramsChange('count', count);
    this.onFilterChange = filter => paramsChange('filter', filter);
    this.onSearch = search => paramsChange('search', search);
    this.onSort = field => paramsChange('sort', field);

    this.componentDidMount = () => loadCountries();
  }

  render() {
    const { total, data, status, view, getCountries, changeView } = this.props.countriesList;
    const { offset, count, search, filter, sort: { field, direction } } = this.props.countriesList.params;
    const { toggleModal } = this.props.modals;

    return (
      <div className="countries-catalog">
        <Row>
          <Button className="cross" bsStyle="primary" onClick={() => toggleModal('countryCreation')} />
          <Col sm={5}>
            <SearchInput value={search} onSearch={this.onSearch} />
          </Col>
          <Col sm={3}>
            <SelectInput
              label="Континент"
              options={options}
              active={filter}
              onChange={this.onFilterChange}
            />
          </Col>
        </Row>
        <ContentStatus status={status}>
          <CountriesList
            countries={getCountries}
            view={view}
            field={field}
            direction={direction}
            onSort={this.onSort}
            onChangeView={changeView}
          />
          <Pagination
            offset={offset}
            total={total}
            dataCount={data.length}
            count={count}
            counts={DATA_COUNTS}
            onPageChange={this.onPageChange}
            onCountChange={this.onCountChange}
          />
        </ContentStatus>
      </div>
    );
  }
}

CountriesCatalog.wrappedComponent.propTypes = {
  countriesList: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
};

export default CountriesCatalog;
