import React from 'react';

import { Container } from './styles';

export default function Dropdown({children, content}) {
  return (
    <Container>
        {children}
        <div className="content" >
            {content}
        </div>
    </Container>
  );
}
