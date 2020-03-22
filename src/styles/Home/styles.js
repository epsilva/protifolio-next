import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: ${props => (props.img ? `url(${props.img})` : 'url(/static/imgWork1.jpeg)')};
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
`;

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    filter: grayscale(100%);
`;

export const Apresentation = styled.span`
    font-size: 42px;
    font-weight: bold;
    color: #fff;
`;

export const About = styled.p`
    color: #fff;
`;

export const TitleSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #17141d;
`;
