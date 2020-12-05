import './App.css';
import React from 'react';
import Login from './screens/Login/index';
import Register from './screens/Register/index';
import Dashboard from './screens/Dashboard/Index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;