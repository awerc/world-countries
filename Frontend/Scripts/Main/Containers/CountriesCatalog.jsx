import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Row, Col, Button } from 'react-bootstrap';
import { Pagination, ContentStatus, SearchInput, SelectInput } from 'Components';
import Modal from 'Containers/Modal';

import { options } from '../Constants/ContinentsConstants';
import CountriesList from '../Components/CountriesList';
import Form from '../Components/CountryCreationForm';

const DATA_COUNTS = [5, 10, 25];

@inject('countriesList', 'modals', 'countryDeleting', 'countryCreation')
@observer
class CountriesCatalog extends Component {
  constructor(props) {
    super(props);

    const { loadCountries, paramsChange, changeView } = props.countriesList;
    const { deleteCountry } = this.props.countryDeleting;
    const { createCountry } = this.props.countryCreation;
    const { toggleModal } = this.props.modals;

    this.componentDidMount = () => loadCountries();

    this.onPageChange = offset => paramsChange('offset', offset);
    this.onCountChange = count => paramsChange('count', count);
    this.onFilterChange = filter => paramsChange('filter', filter);
    this.onSearch = search => paramsChange('search', search);
    this.onSort = field => paramsChange('sort', field);
    this.onSort = field => paramsChange('sort', field);
    this.onChangeView = view => () => changeView(view);
    this.onCreationModalToggle = () => toggleModal('countryCreation');
    this.onCreateCountry = country => () => createCountry(country);
    this.onDeleteCountry = id => () => deleteCountry(id);
  }

  render() {
    const { total, data, status, view, countries } = this.props.countriesList;
    const { offset, count, search, filter, sort: { field, direction } } = this.props.countriesList.params;
    const { status: creatingStatus } = this.props.countryCreation;

    return (
      <div className="countries-catalog">
        <Row>
          <Button className="cross" bsStyle="primary" onClick={this.onCreationModalToggle} />
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
            countries={countries}
            view={view}
            field={field}
            direction={direction}
            onSort={this.onSort}
            onChangeView={this.onChangeView}
            onDelete={this.onDeleteCountry}
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
        <Modal status={creatingStatus} title="Добавление страны" type="countryCreation">
          <Form
            onSubmit={this.onCreateCountry}
            onCancel={this.onCreationModalToggle}
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
