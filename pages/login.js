import React, { useState, useEffect } from 'react';

import { Container, ContainerForm, Title, ContainerTitle } from '../src/styles/Login/styles';
import { Input, Button, LinkCuston, ErrorField, ContinerInput, SuccessField } from '../src/styles/styles';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form'
import { firebaseDatabase } from '../src/utils/firebaseConfig';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signInRequest } from '../src/store/modules/auth/actions';
import Loading from '../src/components/Loading';

function Login() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    const [isLogin, setIsLogin] = useState(true);

    const successRegister = useSelector(state => state.auth.signed);
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);

    const onSubmitRegister = async data => {
        dispatch(signUpRequest(data));
    }

    const onSubmitLogin = data => {
        dispatch(signInRequest(data.email, data.password));
    }

    useEffect(() => {
        if (successRegister) {
            router.push('/home');
        }
    }, [successRegister])

    useEffect(() => {
        dispatch(signInRequest(null, null));
    }, []);

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
                            <Input type="password" name="confirm_password" placeholder="Cofirmar senha" ref={register({
                                required: true,
                                validate: (value) => value === watch('password')
                            })} />
                            {errors.confirm_password && errors.confirm_password.type === 'required' && <ErrorField>Confirmar password é obrigatório</ErrorField>}
                            {errors.confirm_password && errors.confirm_password.type === 'validate' && <ErrorField>As senhas não confere</ErrorField>}
                        </ContinerInput>
                        {!loading
                            ?
                            <Button type="submit" disabled={successRegister}>
                                Criar conta
                            </Button>
                            :
                            <Loading />
                        }
                        {!loading && !successRegister
                            ?
                            <LinkCuston onClick={() => setIsLogin(true)} className="link-voltar">
                                Voltar
                            </LinkCuston>
                            :
                            (successRegister &&
                                <SuccessField>
                                    Conta criada com sucesso!
                                </SuccessField>
                            )
                        }
                    </ContainerForm>
                </>
                :
                <>
                    <ContainerForm onSubmit={handleSubmit(onSubmitLogin)}>
                        <Head>
                            <title>Entrar</title>
                        </Head>
                        <ContainerTitle>
                            <Title isLogin={isLogin}>
                                Entrar no sistema
                             </Title>
                        </ContainerTitle>
                        <ContinerInput>
                            <Input type="email" name="email" placeholder="Digite seu melhor e-mail" ref={register({ required: true, })} />
                            {errors.email && <ErrorField>O e-mail é obrigatório</ErrorField>}
                        </ContinerInput>
                        <ContinerInput>
                            <Input type="password" name="password" placeholder="Digite sua senha" ref={register({ required: true, })} />
                            {errors.password && <ErrorField>O password é obrigatório</ErrorField>}
                        </ContinerInput>
                        {!loading
                            ?
                            <Button type="submit">
                                Entrar
                            </Button>
                            :
                            <Loading />
                        }
                        {!loading && !successRegister
                            ?
                            <LinkCuston onClick={() => setIsLogin(false)} className="link-register">
                                Criar conta gratuitamente
                            </LinkCuston>
                            :
                            (successRegister &&
                                <SuccessField>
                                    Login relaizado com sucesso!
                                </SuccessField>
                            )
                        }
                    </ContainerForm>
                </>
            }
        </Container>
    );
}

export default Login;
