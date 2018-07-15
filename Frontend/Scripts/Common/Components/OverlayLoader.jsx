import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { STATUS_DEFAULT, STATUS_LOADING } from 'Constants/StatusConstants';
import { defineMessage, defineIcon } from 'Utils/LoaderUtils';

const OverlayLoader = ({ status, className, children }) => {
  if (!status || status === STATUS_DEFAULT) {
    return <div className="loader">{children}</div>;
  }

  return (
    <div className={classNames('overlay-loader', className)} data-status={status}>
      {children}
      <div className="overlay">
        <div className="status">
          {status === STATUS_LOADING ?
            <div className="spinner" /> :
            <div className={classNames('icon', defineIcon(status))} />
          }
          <div className="message">{defineMessage(status)}</div>
        </div>
      </div>
    </div>
  );
};

OverlayLoader.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

OverlayLoader.defaultProps = {
  status: STATUS_DEFAULT
};

export default OverlayLoader;
