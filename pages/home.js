import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseStorage, firebaseDatabase } from '../src/utils/firebaseConfig';
import { Container, HomeContainer, Apresentation, About } from '../src/styles/Home/styles';
import { setTitleHeader } from '../src/store/modules/actions/actions';
import Header from '../src/components/Header';
import NotFound from '../src/components/NotFound';
import Head from 'next/head';

function Home({ retorno }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset < 770) {
                dispatch(setTitleHeader(''));
            }
            if (window.pageYOffset >= 770) {
                const data = {
                    title: 'Work and experiences',
                    color: '#17141d',
                };
                dispatch(setTitleHeader(data));
            }
            if (window.pageYOffset >= 1540) {
                const data = {
                    title: 'Skills',
                    color: '#17141d',
                };
                dispatch(setTitleHeader(data));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            {retorno !== null ? <Container img={retorno.img}>
                {/* <Head>
                    <meta charSet="utf-8" />
                    <title>Esdras Pinheiro</title>
                    <link rel="canonical" href="https://portifolio-esdras.herokuapp.com/profile/esdras-pinheiro" />
                    <meta property="og:description" content={`${retorno.about?.replace(/<[^>]*>?/gm, '')}`} />
                    <meta property="og:site_name" content={`${retorno.apresentation} - Veja Nossas Vagas!`} />
                    <meta property="og:title" content={`${retorno.apresentation}`} />
                    <meta property="og:image" content={`${retorno.img}`} />
                </Head> */}
                <Header />
                <HomeContainer id="Home">
                    <Apresentation>{retorno.apresentation}</Apresentation>
                    <About>{retorno.about}</About>
                </HomeContainer>
            </Container> : <NotFound />}
        </>
    );

}

Home.getInitialProps = async ({ req, query }) => {

    let retorno;
    await firebaseDatabase.ref(`/${query.node}/` + query.child).once('value').then(snapshot => {
        retorno = snapshot.val();
    });

    return { retorno };
};

export default Home

