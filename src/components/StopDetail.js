import React from 'react';

import { StopDetailTable } from './StopDetailTable';

export function StopDetail(props) {
  const { stopid } = props.match.params;

  return (
    <div>
      <h2>StopDetail ({stopid})</h2>
      <StopDetailTable stopid={stopid}></StopDetailTable>
    </div>
  );
}
