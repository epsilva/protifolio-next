import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../../styles/styles';

import {
    Container,
    ContainerLogo,
    ContainerHeader,
    ContainerMenu,
    Text,
} from './styles';

function Header({ isIndex }) {

    return (
        <Container>
            <ContainerHeader>
                <ContainerLogo>
                    <Logo />
                </ContainerLogo>
                <ContainerMenu>
                    {isIndex ?
                        <>
                            <Link href="/login">
                                <a>
                                    <Button>
                                        Acessar Sistema
                                    </Button>
                                </a>
                            </Link>
                        </>
                        :
                        <>
                            <Text href="#Home">Home</Text>
                            <Text href="#Work">Work</Text>
                            <Text href="#Skills">Skills</Text>
                        </>
                    }
                </ContainerMenu>
            </ContainerHeader>
        </Container>
    );
}

Header.defaultProps = {
    isIndex: false,
}

Header.PropTypes = {
    isIndex: PropTypes.bool,
}

export default Header;
