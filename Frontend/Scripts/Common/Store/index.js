import { onAction } from 'mobx-state-tree';

const addLogger = stores => {
  const storesNames = Object.getOwnPropertyNames(stores);

  storesNames.map(storeName => {
    onAction(stores[storeName], call => {
      console.groupCollapsed(`Action ${call.name}`);
      console.log('prev state: ', stores[storeName].toJSON());
      console.log('action: ', call);
    });
    onAction(stores[storeName], () => {
      console.log('next state: ', stores[storeName].toJSON());
      console.groupEnd();
    }, true);
  });
};

export default addLogger;
