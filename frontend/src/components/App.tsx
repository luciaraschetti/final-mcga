import './App.css';
import React from 'react';
import Login from './screens/Login/Index';
import Register from './screens/Register/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;