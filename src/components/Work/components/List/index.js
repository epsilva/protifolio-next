import React, { useEffect } from 'react';

import { Container } from './styles';
import ItemList from '../ItemList';

export default function List({ works }) {

    useEffect(() => {
        console.log(Object.values(works));
    }, [])

    return (
        <Container>
            {works && Object.values(works).map(work => <ItemList key={work.company} work={work} />)}
        </Container>
    );
}
