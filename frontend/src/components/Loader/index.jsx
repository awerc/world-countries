import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Status from '../../constants/StatusConstants';
import { defineMessage, defineIcon } from '../../utils/LoaderUtils';
import './style.less';

const Loader = ({ status, className }) => (
  <div className={classNames('loader', className)} data-status={status}>
    {status === Status.LOADING ?
      <div className="spinner" /> :
      <div className={classNames('icon', defineIcon(status))} />
    }
    <div className="message">{defineMessage(status)}</div>
  </div>
);

Loader.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string
};

Loader.defaultProps = {
  status: Status.DEFAULT
};

export default Loader;
