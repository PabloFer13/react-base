import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <div>Hola Mundo..!</div>
          </Route>
          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
