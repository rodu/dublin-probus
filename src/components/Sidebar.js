import React from 'react';
import { Link } from 'react-router-dom';

function TabItem({ name, value }) {
  const isActive = window.location.pathname.match(new RegExp(name));

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={`/${name}`}>{value}</Link>
    </li>
  );
}

export function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav nav-pills nav-stacked">
        <TabItem
          value="Stop List"
          name="stop-list"></TabItem>
        <TabItem
          value="Favourites"
          name="favourites"></TabItem>
      </ul>
    </div>
  );
}
