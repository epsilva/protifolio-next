import React from 'react';

import { Container, HomeContainer } from './styles';
import Skeleton from 'react-loading-skeleton';


export default function Loading() {
    return (
        <Container>
            <HomeContainer>
                <Skeleton height={40} width={300}/>
                <Skeleton height={15}  width={500}/>
            </HomeContainer>
        </Container>
    )

}
