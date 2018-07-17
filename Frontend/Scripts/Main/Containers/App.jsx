import React from 'react';
import { Switch, Route, Redirect } from 'Components/Router';
import { ScrollTop } from 'Components/index';
import ConfirmationModal from 'Containers/ConfirmationModal';

import CountriesCatalog from './CountriesCatalog';
import SingleCountry from './SingleCountry';
import Layout from './Layout';
import NotFound from '../Components/NotFound';

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/Countries" />} />
      <Route path="/Countries" component={CountriesCatalog} />
      <Route path="/Country/:id" exact component={SingleCountry} />
      <Route path="*" component={NotFound} />
    </Switch>

    <ScrollTop />
    <ConfirmationModal />
  </Layout>
);

export default App;
