import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { inject, observer } from 'mobx-react/index';

import { Link } from '../../components/Router';
import { CountryInfo, Loader } from '../../components';
import './style.less';

@inject('singleCountry')
@observer
class SingleCountry extends Component {
  componentDidMount = () => {
    const { loadCountry } = this.props.singleCountry;
    const { id } = this.props.match.params;

    loadCountry(id);
  };

  componentWillUnmount = () => this.props.singleCountry.clearState();

  render() {
    const { data, status } = this.props.singleCountry;

    return (
      <Loader className="single-country" status={status}>
        <CountryInfo {...data} />
        <Link to="/" className="back">
          <Button bsStyle="primary">Назад</Button>
        </Link>
      </Loader>
    );
  }
}

SingleCountry.wrappedComponent.propTypes = {
  singleCountry: PropTypes.object.isRequired,
  match: PropTypes.object
};

export default SingleCountry;
