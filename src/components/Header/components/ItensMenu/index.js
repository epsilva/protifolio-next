import React from 'react';

import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { signOutRequest } from '../../../../store/modules/auth/actions';
import Loading from '../../../Loading';

export default function ItensMenu() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function onClickExit() {
        dispatch(signOutRequest());
    }

    return (
        <Container>
            {!loading 
            ? 
            <span onClick={() => onClickExit()}>
                Sair
            </span>    
            : 
            <Loading />
            }
        </Container>
    );
}
