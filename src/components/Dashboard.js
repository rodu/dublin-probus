import React from 'react';
import { Route } from 'react-router-dom';

import { StopList } from './StopList';
import { StopDetail } from './StopDetail';
import { Favourites } from './Favourites';


export function Dashboard(props) {
  return (
    <div className="dashboard">
      <Route path="/stop-list" component={StopList} />
      <Route path="/stop/:stopid" component={StopDetail} />
      <Route path="/favourites" component={Favourites} />
    </div>
  );
}
