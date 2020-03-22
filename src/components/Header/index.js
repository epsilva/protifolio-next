import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// import Logo from '~/components/Logo';

import {
    Container,
    ContainerLogo,
    ContainerHeader,
    ContainerMenu,
    Text,
    TitleHeader,
} from './styles';

export default function Header() {

    const title = useSelector(state => state.actions.title);
    const color = useSelector(state => state.actions.color);

    return (
        <Container>
            <ContainerHeader color={color}>
                <ContainerLogo>
                    {/* <Logo /> */}
                    <TitleHeader>{title}</TitleHeader>
                </ContainerLogo>
                <ContainerMenu>
                    <Text href="#Home">Home</Text>
                    <Text href="#Work">Work</Text>
                    <Text href="#Skills">Skills</Text>
                </ContainerMenu>
            </ContainerHeader>
        </Container>
    );
}
