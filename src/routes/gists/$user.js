import React from 'react';
import { useRouteData } from 'marauder';

export async function load({ params }) {
  const { user } = params;
  const res = await fetch(`https://api.github.com/users/${user}/gists`);
  const gists = await res.json();
  return { gists, user };
}

export function meta({ gists, user }) {
  return {
    title: `${gists.length} gists from ${user}`,
    description: `Check out all of ${user}'s gists!`,
  };
}

export default function Gists$User() {
  const [{ user, gists }] = useRouteData();
  return (
    <div>
      <h2>Gists for {user}</h2>
      <ul>
        {gists.map(({ id, files }) => (
          <li key={id}>{Object.keys(files)[0]}</li>
        ))}
      </ul>
    </div>
  );
}
