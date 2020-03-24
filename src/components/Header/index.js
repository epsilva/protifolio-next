import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button } from '../../styles/styles';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import { useRouter } from 'next/router';
import Dropdow from './components/Dropdown';
import ItensMenu from './components/ItensMenu';

import {
    Container,
    ContainerLogo,
    ContainerHeader,
    ContainerMenu,
    Text,
} from './styles';

function Header({ isIndex, isHome }) {
    const router = useRouter();
    const user = useSelector(state => state.auth.user);
    const singout = useSelector(state => state.auth.singout);

    useEffect(() => {
        if(singout) {
            router.push('/');
        }
    }, [singout])

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
                        : isHome ? 
                        <>
                            <Dropdow content={<ItensMenu />}>
                                <Avatar name={user?.name} size={45} round maxInitials={2}/>
                            </Dropdow>
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
    isHome: false
}

Header.PropTypes = {
    isIndex: PropTypes.bool,
    isHome: PropTypes.bool
}

export default Header;
