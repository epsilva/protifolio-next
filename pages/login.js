import React, { useState, useEffect } from 'react';

import { Container, ContainerForm, Title, ContainerTitle } from '../src/styles/Login/styles';
import { Input, Button, LinkCuston, ErrorField, ContinerInput } from '../src/styles/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { firebaseImpl } from '../src/utils/firebaseConfig';
import loginError from '../src/utils/firebaseMsgs';

function Login() {

    const { register, handleSubmit, watch, errors } = useForm();
    const [confirmPassword, setConfirmPassword] = useState(false);

    const [isLogin, setIsLogin] = useState(true);

    const onSubmitRegister = data => {
        // if (data.password === data.confirm_password) {
        //     firebaseImpl.auth().createUserWithEmailAndPassword(data.email, data.password).then(user => {
        //         firebaseImpl.auth().currentUser.updateProfile({
        //             displayName: data.name
        //         }).then(sucesso => {
        //             console.log(sucesso)
        //         }).catch(function (error) {
        //             console.log(error)
        //         });
        //     }).catch(error => {
        //         console.log(error)
        //         loginError(error);
        //     });
        // } else {
        //     console.log('Erro senha')
        // }
    }

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
                    <ContainerForm autoComplete={true && ''} onSubmit={handleSubmit(onSubmitRegister)}>
                        <ContainerTitle>
                            <Title isLogin={isLogin}>
                                Criar conta gratuitamente
                             </Title>
                        </ContainerTitle>
                        <ContinerInput>
                            <Input type="text" name="name" placeholder="Digite seu nome" ref={register({ required: true, })} />
                            {errors.name && <ErrorField>O nome é obrigatório</ErrorField>}
                        </ContinerInput>
                        <ContinerInput>
                            <Input type="email" name="email" placeholder="Digite seu melhor e-mail" ref={register({ required: true, })} />
                            {errors.email && <ErrorField>O e-mail é obrigatório</ErrorField>}
                        </ContinerInput>
                        <ContinerInput>
                            <Input type="password" name="password" placeholder="Digite sua senha" ref={register({ required: true, })} />
                            {errors.password && <ErrorField>O password é obrigatório</ErrorField>}
                        </ContinerInput>
                        <ContinerInput>
                            <Input type="password" name="confirm_password" placeholder="Cofirmar senha" ref={register({ required: true, 
                                validate: (value) => value === watch('password') })} />
                            {errors.confirm_password && errors.confirm_password.type === 'required' && <ErrorField>Confirmar password é obrigatório</ErrorField>}
                            {errors.confirm_password && errors.confirm_password.type === 'validate' && <ErrorField>As senhas não confere</ErrorField>}
                        </ContinerInput>
                        <Button type="submit">
                            Criar conta
                        </Button>
                        <LinkCuston onClick={() => setIsLogin(true)} className="link-voltar">
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
                        <ContinerInput>
                            <Input type="email" placeholder="Digite seu melhor e-mail" />
                        </ContinerInput>
                        <ContinerInput>
                            <Input type="password" placeholder="Digite sua senha" />
                        </ContinerInput>
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
