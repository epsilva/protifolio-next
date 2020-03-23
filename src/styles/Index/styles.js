import styled from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
    @media screen and (min-width: 910px) {
        background-image: url('/static/profile.svg');
        background-size:  800px; 
        background-position-y: 180px;
        background-repeat: no-repeat;
        justify-content: center;
        background-attachment: inherit; 
    }
`;

export const ContainerLeft = styled.div`
    display: flex;
    width: 50%;
    @media screen and (max-width: 910px) {
        display: none;
    }
`;

export const ContainerRight = styled.div`
    display: flex;
    width: 50%;
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 910px) {
        width: 100%;
        background-image: url('/static/profile.svg');
        background-size: 200px; 
        background-repeat: no-repeat;
        background-position-y: 70%;
        background-position-x: 100px;
        justify-content: center;
        background-attachment: inherit; 

    }
    .ask {
        @media screen and (max-width: 910px) {
            margin-top: 40px;
            width: 100%;
            text-align: center;
            background: #6963fb;
            color: #FFF;
            font-weight: bold;
        }
    }

    button {
        margin-top: 32px;
    }
    
    a {
        text-align: center;
    }
`;

export const Title = styled.strong`
    font-size: 32px;
`;

export const Description = styled.span`
    font-size: 24px;
    color: #565656;
`;
