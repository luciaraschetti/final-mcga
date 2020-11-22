import './App.css';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
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
