import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginForm from './components/loginForm';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/users" component={LoginForm} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;