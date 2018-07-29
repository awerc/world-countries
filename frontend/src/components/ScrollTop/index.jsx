import React from 'react';
import ScrollToTop from 'react-scroll-up';

import './style.less';

const ScrollTop = props => (
  <ScrollToTop style={{ bottom: '20px', right: '20px' }} {...props} >
    <div className="to-top" />
  </ScrollToTop>
);

ScrollTop.defaultProps = {
  showUnder: 160
};

export default ScrollTop;
