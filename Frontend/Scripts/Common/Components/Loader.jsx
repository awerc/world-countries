import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { STATUS_DEFAULT, STATUS_SUCCESS, STATUS_LOADING } from 'Constants/StatusConstants';
import { defineMessage, defineIcon } from 'Utils/LoaderUtils';

const Loader = ({ status, className, children }) => {
  if (status === STATUS_SUCCESS || status === STATUS_DEFAULT) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={classNames('loader', className)} data-status={status}>
      {status === STATUS_LOADING ?
        <div className="spinner" /> :
        <div className={classNames('icon', defineIcon(status))} />}
      <div className="message">{defineMessage(status)}</div>
    </div>
  );
};

Loader.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

Loader.defaultProps = {
  status: STATUS_DEFAULT
};

export default Loader;
