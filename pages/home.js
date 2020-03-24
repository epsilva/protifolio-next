import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Header from '../src/components/Header';

function Home() {
    const router = useRouter();
    const signed = useSelector(state => state.auth.signed);

    useEffect(() => {
        if(!signed) {
            router.push('/');
        }
    }, []);

    return (
        <>
            <Header isHome />
            
        </>
    );
}

export default Home;
