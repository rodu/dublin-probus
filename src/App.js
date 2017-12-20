import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { BusStop } from './components/bus-stop';
import { stopInfoService } from './services/stop-info-service';

function StopList() {
  return (
    <div id="stops-list" className="tab">
      <input type="text" placeholder="Stop Number" />
      <BusStop></BusStop>
      <input type="button" value="Load" />
    </div>
  );
}

function Favourites() {
  return <div id="favourites" className="tab">Favourites</div>;
}

function TabItem({ name, value }) {
  return (
    <li>
      <Link to={`/${name}`}>{value}</Link>
    </li>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { stopNumber: 0 };
  }

  onStopNumberChange(event) {
    this.setState({ stopNumber: event.target.value });
  }

  loadStopData() {
    const { stopNumber } = this.state;

    stopInfoService(stopNumber).then((info) => {
      console.log(info);
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="header">
            Header
          </div>
          <div className="sidebar">
            <ul>
              <TabItem
                value="Stop List"
                name="stop-list"></TabItem>
              <TabItem
                value="Favourites"
                name="favourites"></TabItem>
            </ul>
          </div>
          <div className="dashboard">
            <Route path="/stop-list" component={StopList} />
            <Route path="/favourites" component={Favourites} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
