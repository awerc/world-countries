import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Status from '../../constants/StatusConstants';
import Loader from '../Loader';
import './style.less';

const OverlayState = ({ status, className, children }) => {
  if (!status || status === Status.DEFAULT) {
    return <div className="loader">{children}</div>;
  }

  return (
    <div className={classNames('overlay-state', className)} data-status={status}>
      {children}
      <div className="overlay">
        <Loader status={status} />
      </div>
    </div>
  );
};

OverlayState.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

OverlayState.defaultProps = {
  status: Status.DEFAULT
};

export default OverlayState;
