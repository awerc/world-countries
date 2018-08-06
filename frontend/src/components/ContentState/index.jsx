import React from 'react';
import PropTypes from 'prop-types';

import Status from '../../constants/StatusConstants';
import Loader from '../Loader';

const ContentState = ({ status, className, children }) => {
  if (status === Status.SUCCESS || status === Status.DEFAULT) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Loader className={className} status={status} />
  );
};

ContentState.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

ContentState.defaultProps = {
  status: Status.DEFAULT
};

export default ContentState;
