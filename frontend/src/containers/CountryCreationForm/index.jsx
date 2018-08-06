import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Button } from 'react-bootstrap';

import { InputField as Field } from '../../components';
import { Continents } from '../../constants/ContinentsConstants';
import { required, positiveNumber, url } from '../../utils/ValidationRules';

const DefaultFlag = 'https://bit.ly/2LTVoMK';

const CountryCreationForm = ({ onSubmit, onCancel }) => (
  <Form
    onSubmit={values => {
      const { area, population, ...others } = values;
      onSubmit({ area: Number(area), population: Number(population), ...others });
    }}
    initialValues={{ flag: DefaultFlag }}
    render={({ handleSubmit, form }) => (
      <form onSubmit={handleSubmit}>
        <Field name="flag" type="text" label="Флаг" placeholder="Ссылка на изображение..." validate={[required, url]} />
        <Field name="name" type="text" label="Название" placeholder="Название..." validate={required} />
        <Field name="capital" label="Столица" type="text" placeholder="Столица..." validate={required} />
        <Field name="continent" label="Континент" type="select" validate={required} >
          <option disabled hidden value="" />
          {Continents.map(continent => (
            <option value={continent} key={continent}>{continent}</option>
          ))}
        </Field>
        <Field name="population" label="Население, чел." type="number" placeholder="Население..." validate={[required, positiveNumber]} />
        <Field name="area" label="Площадь, км" type="number" placeholder="Площадь..." validate={[required, positiveNumber]} />
        <Field name="description" label="Описание" type="textarea" placeholder="Описание..." validate={required} />
        <div className="controls">
          <Button bsStyle="link" onClick={onCancel}>
            Отмена
          </Button>
          <Button bsStyle="primary" type="submit">
            Отправить
          </Button>
        </div>
      </form>
    )}
  />
);

CountryCreationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default CountryCreationForm;
