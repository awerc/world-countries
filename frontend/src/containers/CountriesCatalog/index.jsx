import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';

import { Pagination, Loader, SearchInput, SelectInput, CountriesList, CountryCreationForm } from '../../components';
import Modal from '../Modal';
import { options } from '../../constants/ContinentsConstants';

const DATA_COUNTS = [5, 10, 25];

@inject('countriesList', 'modals', 'countryDeleting', 'countryCreation')
@observer
class CountriesCatalog extends Component {
  componentDidMount = () => this.props.countriesList.loadCountries();

  handleOnPageChange = offset => this.props.countriesList.paramsChange('offset', offset);
  handleOnCountChange = count => this.props.countriesList.paramsChange('count', count);
  handleOnFilterChange = filter => this.props.countriesList.paramsChange('filter', filter);
  handleOnSearch = search => this.props.countriesList.paramsChange('search', search);
  handleOnSort = field => this.props.countriesList.paramsChange('sort', field);
  handleOnCreationModalToggle = () => this.props.modals.toggleModal('countryCreation');
  handleOnCreateCountry = country => this.props.countryCreation.createCountry(country);
  handleOnDeleteCountry = id => () => this.props.countryDeleting.deleteCountry(id);

  render() {
    const { total, data, status, countries } = this.props.countriesList;
    const { offset, count, search, filter, sort: { field, direction } } = this.props.countriesList.params;
    const { status: creatingStatus } = this.props.countryCreation;

    return (
      <div className="countries-catalog">
        <Row>
          <Button className="cross" bsStyle="primary" onClick={this.handleOnCreationModalToggle} />
          <Col sm={5}>
            <SearchInput value={search} onSearch={this.handleOnSearch} />
          </Col>
          <Col sm={3}>
            <SelectInput
              label="Континент"
              options={options}
              active={filter}
              onChange={this.handleOnFilterChange}
            />
          </Col>
        </Row>
        <Loader status={status}>
          <CountriesList
            countries={countries}
            field={field}
            direction={direction}
            onSort={this.handleOnSort}
            onDelete={this.handleOnDeleteCountry}
          />
          <Pagination
            offset={offset}
            total={total}
            dataCount={data.length}
            count={count}
            counts={DATA_COUNTS}
            onPageChange={this.handleOnPageChange}
            onCountChange={this.handleOnCountChange}
          />
        </Loader>
        <Modal status={creatingStatus} title="Добавление страны" type="countryCreation">
          <CountryCreationForm
            onSubmit={this.handleOnCreateCountry}
            onCancel={this.handleOnCreationModalToggle}
          />
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
