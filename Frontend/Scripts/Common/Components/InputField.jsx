import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FormGroup, HelpBlock, FormControl, ControlLabel } from 'react-bootstrap';
import { composeValidators } from 'Utils/ValidationUtils';

const FormControlAdapter = ({ input, meta, children, ...other }) => {
  const copy = other;
  if (copy.type === 'textarea' || copy.type === 'select') {
    copy.componentClass = copy.type;
    copy.type = undefined;
  }
  const error = meta.touched && meta.error ? 'error' : null;
  return (
    <FormGroup controlId={input.name} validationState={error}>
      <ControlLabel>{copy.label}</ControlLabel>
      <FormControl {...input} {...copy}>
        {children}
      </FormControl>
      {error && <FormControl.Feedback />}
      {error && <HelpBlock>{meta.error}</HelpBlock>}
      {copy.help && <HelpBlock>{copy.help}</HelpBlock>}
    </FormGroup>
  );
};

FormControlAdapter.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  children: PropTypes.node,
};

const InputField = ({ validate, ...other }) => {
  if (Array.isArray(validate)) validate = composeValidators(...validate);

  return (
    <Field {...other} validate={validate} component={FormControlAdapter} />
  );
};

InputField.propTypes = {
  validate: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.func),
    PropTypes.func
  ])
};

export default InputField;
