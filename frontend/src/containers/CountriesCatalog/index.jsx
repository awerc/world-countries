import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';

import {
  CountriesList,
  SearchForm,
  SelectInput,
  Pagination,
  ContentState,
  CountryCreationForm,
  OverlayState,
} from '../../components';
import Modal from '../Modal';
import { Options } from '../../constants/ContinentsConstants';

const DATA_COUNTS = [5, 10, 25];

@inject('countriesList', 'modals', 'countryDeleting', 'countryCreation')
@observer
class CountriesCatalog extends Component {
  componentDidMount = () => this.props.countriesList.loadCountries();

  handlePageChange = offset => this.props.countriesList.paramsChange('offset', offset);
  handleCountChange = count => this.props.countriesList.paramsChange('count', count);
  handleFilterChange = filter => this.props.countriesList.paramsChange('filter', filter);
  handleSearch = search => this.props.countriesList.paramsChange('search', search);
  handleSort = field => this.props.countriesList.paramsChange('sort', field);
  handleCreationModalToggle = () => this.props.modals.toggleModal('countryCreation');
  handleCountryCreate = country => this.props.countryCreation.createCountry(country);
  handleCountryDelete = id => () => this.props.countryDeleting.deleteCountry(id);

  render() {
    const { total, data, status, countries } = this.props.countriesList;
    const { offset, count, search, filter, sort: { field, direction } } = this.props.countriesList.params;
    const { status: creatingStatus } = this.props.countryCreation;

    return (
      <div className="countries-catalog">
        <Row>
          <Button className="cross" bsStyle="primary" onClick={this.handleCreationModalToggle} />
          <Col sm={5}>
            <SearchForm value={search} onSearch={this.handleSearch} />
          </Col>
          <Col sm={3}>
            <SelectInput
              label="Континент"
              options={Options}
              active={filter}
              onChange={this.handleFilterChange}
            />
          </Col>
        </Row>
        <ContentState status={status}>
          <CountriesList
            countries={countries}
            field={field}
            direction={direction}
            onSort={this.handleSort}
            onDelete={this.handleCountryDelete}
          />
          <Pagination
            offset={offset}
            total={total}
            dataCount={data.length}
            count={count}
            counts={DATA_COUNTS}
            onPageChange={this.handlePageChange}
            onCountChange={this.handleCountChange}
          />
        </ContentState>
        <Modal title="Добавление страны" type="countryCreation">
          <OverlayState status={creatingStatus}>
            <CountryCreationForm
              onSubmit={this.handleCountryCreate}
              onCancel={this.handleCreationModalToggle}
            />
          </OverlayState>
        </Modal>
      </div>
    );
  }
}

CountriesCatalog.wrappedComponent.propTypes = {
  countryCreation: PropTypes.object.isRequired,
  countryDeleting: PropTypes.object.isRequired,
  countriesList: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
};

export default CountriesCatalog;
