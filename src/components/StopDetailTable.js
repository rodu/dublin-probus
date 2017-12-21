import React, { Component } from 'react';

function loadStopDetail(stopid) {
  return Promise.resolve([
    { time: '9:00 am', route: '15' },
    { time: '9:10 am', route: '83' }
  ]);
}

export class StopDetailTable extends Component {
  constructor(props) {
    super(props);

    this.state = { info: [] };
  }

  componentDidMount() {
    loadStopDetail(this.props.stopid).then((info) => {
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
