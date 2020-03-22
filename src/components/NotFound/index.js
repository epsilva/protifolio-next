import React from 'react';

import { Container } from './styles';

export default function Error404() {
  return (
    <Container>
      <div>
        <img src="/static/404.svg" alt="" />
        <h2>Ooops: Página não encontrada</h2>
      </div>
    </Container>
  );
}
