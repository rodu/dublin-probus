import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { debounce } from 'lodash-decorators';

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

  @debounce(250)
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
      <div className="stop-list">
        <h2>Stop List</h2>
        <input type="text"
          placeholder="Filter"
          onChange={this.filterStops.bind(this)}
          className="filter-field" />
        <ul>
          {this.state.stopListFiltered.map((stop) => {
            return (
              <li key={stop.stopid}>
                <Link to={`/stop/${stop.stopid}`}>
                  {stop.displaystopid} - {stop.fullname}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
