import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <h2 className="text-xl">Gists Index</h2>
      <ul>
        <li>
          <Link className="text-aqua underline" to="ryanflorence">
            Ryan
          </Link>
        </li>
        <li>
          <Link className="text-aqua underline" to="mjackson">
            Michael
          </Link>
        </li>
      </ul>
    </div>
  );
}
