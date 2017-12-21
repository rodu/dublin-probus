import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { debounce } from 'lodash-decorators';

import { PageHeader } from './PageHeader';
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
  filterStops(value) {
    this.setState({
      stopListFiltered: this.state.stopList.filter(
        filterByValue,
        { expr: new RegExp(value, 'i') }
      )
    })
  }

  render() {
    return (
      <div className="stop-list">
        <PageHeader value="Stop List" />
        <input type="text"
          placeholder="Filter"
          onChange={(event) => this.filterStops.call(this, event.target.value)}
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
