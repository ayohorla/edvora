import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './component/Layout';
import City from './pages/City';
import Home from './pages/Home';
import Product from './pages/Product';
import State from './pages/State';


function App() {
  return (
    <Layout>
    <br/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/state'>
          <State />
        </Route>
        <Route path='/city'>
          <City />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
