import React from 'react';

import './style.less';
import { Switch, Route, Redirect } from './components/Router';
import { ConfirmationModal, CountriesCatalog, SingleCountry, Layout } from './containers';
import { ScrollTop, NotFound } from './components';

const App = () => (
  <Layout>
    <Switch>
      <Redirect exact from="/" to="/countries" />
      <Route path="/countries" component={CountriesCatalog} />
      <Route path="/country/:id" exact component={SingleCountry} />
      <Route path="*" component={NotFound} />
    </Switch>

    <ScrollTop />
    <ConfirmationModal />
  </Layout>
);

export default App;
