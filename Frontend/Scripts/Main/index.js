import AppService from 'Services/AppService';

import App from './Containers/App';
import stores from './Stores';

import '../../Styles/Main/index.less';

new AppService({
  App,
  stores,
  node: document.getElementById('root')
}).render();
