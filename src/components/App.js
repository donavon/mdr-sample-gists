import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Routes from '../routes';

export default function App() {
  return (
    <>
      <Routes />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
