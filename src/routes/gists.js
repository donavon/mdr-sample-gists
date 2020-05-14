import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Gists() {
  return (
    <div>
      <h1 className="text-xl3 bold">Gists</h1>
      <Outlet />
    </div>
  );
}
