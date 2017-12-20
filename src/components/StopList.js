import React from 'react';
import { BusStop } from './BusStop';

export function StopList() {
  return (
    <div id="stops-list" className="tab">
      <input type="text" placeholder="Stop Number" />
      <BusStop></BusStop>
      <input type="button" value="Load" />
    </div>
  );
}
