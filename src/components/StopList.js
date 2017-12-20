import React, { Component } from 'react';

import { stopListService } from '../services/StopListService';

const filterByValue = function (stopItem) {
  return (
    this.expr.test(stopItem.fullname) || this.expr.test(stopItem.displaystopid)
  );
};

export class StopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stopList: [],
      stopListFiltered: []
    };

  }

  componentDidMount() {
    stopListService.get().then((stopList) => {
      this.setState({ stopList, stopListFiltered: stopList })
    });
  }

  filterStops(event) {
    this.setState({
      stopListFiltered: this.state.stopList.filter(
        filterByValue,
        { expr: new RegExp(event.target.value, 'i') }
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Stop List</h2>
        <input type="text" placeholder="Filter" onChange={this.filterStops.bind(this)} />
        <ul>
          {this.state.stopListFiltered.map((stop) => {
            return <li key={stop.stopid}>{stop.displaystopid} - {stop.fullname}</li>;
          })}
        </ul>
      </div>
    );
  }
}
