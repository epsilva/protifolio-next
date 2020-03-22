import React from 'react';

import { Container } from './styles';

export default function Error404() {
  return (
    <Container>
      <div>
        <img src="/static/500.svg" alt="" />
        <h2>Ooops: Estamos trabalhando para corrigir os problemas</h2>
      </div>
    </Container>
  );
}
