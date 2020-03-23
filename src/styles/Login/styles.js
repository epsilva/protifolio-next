import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: ${props => (props.isLogin ? 'url("static/login.svg")' : 'url("static/register.svg")')};    
    background-size: contain; 
    background-repeat: no-repeat;
    justify-content: center;
    background-attachment: fixed;

    > a {
        margin: 12px;
        position: fixed;
        top: 0;
        right: 0;

    }
`;

export const ContainerForm = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 380px;
    height: 60vh;
    padding: 20px;
    border-radius: 8px;

    button {
        width: 100%;
        height: 42px;
        margin-bottom: 18px;
        @media screen and (max-width: 910px) {
            font-size: 28px;
        }
    }

    @media screen and (max-width: 910px) {
        background: transparent;
        box-shadow: 0px 0px 0px;
    }

    .link-voltar {
        color: ${props => (!props.isLogin && '#FFF')};    
        @media screen and (max-width: 910px) {
            color: ${props => (!props.isLogin && '#6963fb')};    
        }
    }

    .link-register {
        color: ${props => (!props.isLogin && '#6963fb')};    
        @media screen and (max-width: 910px) {
            color: ${props => (!props.isLogin && '#FFF')};    
        }
    }

`;

export const Title = styled.span`
    font-size: 28px;
    color: ${props => (props.isLogin ? '#525252' : '#FFF')};    
    @media screen and (max-width: 910px) {
        font-size: 28px;
        color: ${props => (props.isLogin ? '#FFF' : '#FFF')};    
    }
`;

export const ContainerTitle = styled.div`
    margin-bottom: 42px;
`;
