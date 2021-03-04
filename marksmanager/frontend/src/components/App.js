import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leaderboard/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
