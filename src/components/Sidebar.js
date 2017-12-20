import React from 'react';
import { Link } from 'react-router-dom';

function TabItem({ name, value }) {
  return (
    <li>
      <Link to={`/${name}`}>{value}</Link>
    </li>
  );
}

export function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
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
