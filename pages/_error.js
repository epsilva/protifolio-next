import React from 'react';
import NotFound from '../src/components/NotFound';
import ServerError from '../src/components/ServerError';

function Error({ statusCode }) {
  return <p>{statusCode === 500 ? <ServerError /> : <NotFound />}</p>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
