import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseStorage, firebaseDatabase } from '../src/utils/firebaseConfig';
import { Container, HomeContainer, Apresentation, About } from '../src/styles/Home/styles';
import { setTitleHeader } from '../src/store/modules/actions/actions';
import Header from '../src/components/Header';
import Loading from '../src/components/LoadingHome';
import NotFound from '../src/components/NotFound';

function Home({ retorno, child }) {
    const dispatch = useDispatch();

    const [img, setImg] = useState('');
    const [sideClient, setSideClient] = useState(false);

    useEffect(() => {
        firebaseStorage.ref().child(`${child}/imgHome.jpeg`).getDownloadURL().then(function (url) {
            setImg(url);
            setSideClient(true);
        }).catch(function (error) {
            console.log(error);
        });

    }, []);

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
            {sideClient ? <Container img={img}>
                <Header />
                <HomeContainer id="Home">
                    <Apresentation>{retorno.apresentation}</Apresentation>
                    <About>{retorno.about}</About>
                </HomeContainer>
            </Container> : retorno === null ? <NotFound /> : <Loading />}
        </>
    );

}

Home.getInitialProps = async ({ req, query }) => {

    let retorno = {error: true};
    await firebaseDatabase.ref(`/${query.node}/` + query.child).once('value').then( snapshot => {
        retorno = snapshot.val();
      });

    return { retorno, child: query.child };
};

export default Home

