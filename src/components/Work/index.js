import React from 'react';

import { Container } from './styles';
import List from './components/List';

function Work({ works }) {
    return (
        <Container id="Work">
            <List works={works} />
        </Container>
    );
}

export default Work;
