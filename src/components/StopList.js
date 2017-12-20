import React, { Component } from 'react';

import { stopListService } from '../services/StopListService';

export class StopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stopList: []
    };
  }

  componentDidMount() {
    stopListService.get().then((stopList) => {
      this.setState({ stopList })
    });
  }

  render() {
    return (
      <div id="stops-list" className="tab">
        <input type="text" placeholder="Stop Number" />
        <ul>
          {this.state.stopList.map((stop) => {
            return <li key={stop.number}>{stop.number}</li>;
          })}
        </ul>
      </div>
    );
  }
}
