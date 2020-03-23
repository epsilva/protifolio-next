import React from 'react';

import { Container, Text } from './styles';

export default function Tag({ msg }) {
    return (
        <Container>
            <Text>{msg}</Text>
        </Container>
    );
}
