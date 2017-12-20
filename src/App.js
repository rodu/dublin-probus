import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { stopNumber: 0 };
  }

  onStopNumberChange(event) {
    this.setState({ stopNumber: event.target.value });
  }

  render() {
    return (
      <Router>
        <div className="grid-container">
          <Header />
          <Sidebar />
          <Dashboard />
        </div>
      </Router>
    );
  }
}

export default App;
