import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, Button, Row, Col } from 'react-bootstrap';

const SearchInput = ({ value, onSearch }) => {
  const onSubmit = event => {
    event.preventDefault();
    onSearch(event.target.search.value);
  };

  return (
    <form
      className="search-input"
      onSubmit={onSubmit}
    >
      <FormGroup>
        <Row>
          <Col sm={8}>
            <FormControl
              type="text"
              placeholder="Поиск..."
              name="search"
              defaultValue={value}
            />
          </Col>
          <Col sm={4}>
            <Button block bsStyle="primary" type="submit">Поиск</Button>
          </Col>
        </Row>
      </FormGroup>
    </form>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func
};

export default SearchInput;
