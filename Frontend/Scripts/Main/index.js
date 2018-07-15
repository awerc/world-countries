import AppService from 'Services/AppService';

import App from './Containers/App';
import stores from './Stores';

import '../../Styles/Main/index.less';
import '../../Images/favicon.ico';
import '../../Images/favicon-16x16.png';
import '../../Images/favicon-32x32.png';

new AppService({
  App,
  stores,
  node: document.getElementById('root')
}).render();
