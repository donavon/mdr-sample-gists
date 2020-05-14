import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { load } from 'marauder';
import Loading from '../components/Loading';
import Gists from './gists';

const config = { fallback: <Loading /> };

const Gists$User = load(() => import('./gists/$user'), config);
const GistsIndex = load(() => import('./gists/index'), config);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="gists" element={<Gists />}>
        <Route path={'/'} element={<GistsIndex />} />
        <Route path={':user'} element={<Gists$User />} />
      </Route>
      <Navigate exact from="/" to="gists" />
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}
