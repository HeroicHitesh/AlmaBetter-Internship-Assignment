import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Dashboard from './leaderboard/Dashboard';
import Marks from './leaderboard/Marks';
import Leaderboard from './leaderboard/Leaderboard';

import { Provider } from 'react-redux';
import store from '../store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/marks" component={Marks} />
              <Route exact path="/leaderboard" component={Leaderboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
