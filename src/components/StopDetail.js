import React from 'react';

import { PageHeader } from './PageHeader';
import { StopDetailTable } from './StopDetailTable';

export function StopDetail(props) {
  const { stopid } = props.match.params;

  return (
    <div>
      <PageHeader value={`Stop Detail (${stopid})`} />
      <StopDetailTable stopid={stopid} />
    </div>
  );
}
