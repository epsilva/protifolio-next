import React, { useState, useEffect } from 'react';

import { Container, ContainerForm, Title, ContainerTitle } from '../src/styles/Login/styles';
import { Input, Button, LinkCuston } from '../src/styles/styles';
import Head from 'next/head';
import Link from 'next/link';

function Login() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <Container isLogin={isLogin}>
            <Link href="/">
            <a>
                <Button>Voltar para página principal</Button>
            </a>
            </Link>
            {!isLogin ?
                <>
                    <Head>
                        <title>Criar Conta</title>
                    </Head>
                    <ContainerForm autoComplete={true && ''} >
                        <ContainerTitle>
                            <Title isLogin={isLogin}>
                                Criar conta gratuitamente
                             </Title>
                        </ContainerTitle>
                        <Input type="text" placeholder="Digite seu nome" />
                        <Input type="email" placeholder="Digite seu melhor e-mail" />
                        <Input type="password" placeholder="Digite sua senha" />
                        <Input type="password" placeholder="Cofirmar senha" />
                        <Button>
                            Criar conta
                        </Button>
                        <LinkCuston onClick={() => setIsLogin(true)}  className="link-voltar">
                            Voltar
                        </LinkCuston>
                    </ContainerForm>
                </>
                :
                <>
                    <ContainerForm>
                        <Head>
                            <title>Entrar</title>
                        </Head>
                        <ContainerTitle>
                            <Title isLogin={isLogin}>
                                Entrar no sistema
                             </Title>
                        </ContainerTitle>
                        <Input type="email" placeholder="Digite seu melhor e-mail" />
                        <Input type="password" placeholder="Digite sua senha" />
                        <Button>
                            Entrar
                        </Button>
                        <LinkCuston onClick={() => setIsLogin(false)} className="link-register">
                            Criar conta gratuitamente
                        </LinkCuston>
                    </ContainerForm>
                </>
            }
        </Container>
    );
}

export default Login;
