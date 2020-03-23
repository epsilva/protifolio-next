import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`;

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    filter: grayscale(100%);
    background-image: ${props => (props.img ? `url(${props.img})` : 'url(/static/imgWork1.jpeg)')};
    background: #17141d;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    background-attachment: fixed;
    background-position: center;
`;

export const Apresentation = styled.span`
    font-size: 42px;
    font-weight: bold;
    color: #fff;
    @media screen and (max-width: 910px) {
        font-size: 28px;
    }
`;

export const About = styled.p`
    color: #fff;
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #17141d;
    @media screen and (max-width: 910px) {
        font-size: 8px;
    }
`;
