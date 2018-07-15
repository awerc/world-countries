import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

const SelectInput = ({ label, options, active, onChange }) => (
  <Form horizontal>
    <FormGroup controlId="formControlsSelect">
      <Col sm={4}>
        <ControlLabel>{label}</ControlLabel>
      </Col>
      <Col sm={8}>
        <FormControl componentClass="select" defaultValue={active} onChange={e => onChange(e.target.value)}>
          {options.map(({ value, name }) => (
            <option value={value} key={value}>{name}</option>
          ))}
        </FormControl>
      </Col>
    </FormGroup>
  </Form>
);

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    name: PropTypes.string
  })),
  active: PropTypes.string,
  onChange: PropTypes.func
};

export default SelectInput;
