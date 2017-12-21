import React, { Component } from 'react';

import { stopInfoService } from '../services/StopInfoService';

export class StopDetailTable extends Component {
  constructor(props) {
    super(props);

    this.state = { info: [] };
  }

  componentDidMount() {
    stopInfoService.get(this.props.stopid).then((info) => {
      this.setState({ info })
    });
  }

  render() {
    return (
      <table style={{ width: '100%' }}>
        {this.state.info.map((item) => {
          return (
            <tr>
              <td>{item.route}</td>
              <td>{item.time}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}
