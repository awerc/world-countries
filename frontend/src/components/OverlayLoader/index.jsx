import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Status from '../../constants/StatusConstants';
import { defineMessage, defineIcon } from '../../utils/LoaderUtils';
import './style.less';

const OverlayLoader = ({ status, className, children }) => {
  if (!status || status === Status.DEFAULT) {
    return <div className="loader">{children}</div>;
  }

  return (
    <div className={classNames('overlay-loader', className)} data-status={status}>
      {children}
      <div className="overlay">
        <div className="status">
          {status === Status.LOADING ?
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
  status: Status.DEFAULT
};

export default OverlayLoader;
