import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'Components/Router';
import { ContentStatus } from 'Components';

import CountryInfo from '../Components/CountryInfo';

@inject('singleCountry')
@observer
class SingleCountry extends Component {
  constructor(props) {
    super(props);

    const { loadCountry, clearState } = this.props.singleCountry;
    const { id } = this.props.match.params;

    this.componentDidMount = () => loadCountry(id);
    this.componentWillUnmount = () => clearState();
  }

  render() {
    const { data, status } = this.props.singleCountry;

    return (
      <ContentStatus className="single-country" status={status}>
        <CountryInfo {...data} />
        <Link to="/" className="back">
          <Button bsStyle="primary">Назад</Button>
        </Link>
      </ContentStatus>
    );
  }
}

SingleCountry.wrappedComponent.propTypes = {
  singleCountry: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default SingleCountry;
