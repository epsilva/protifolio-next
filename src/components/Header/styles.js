import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: flex-start;
    height: 100%;
`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 1;
    padding: 0 8px 0 8px;
    background-color: ${props => (props.color ? props.color : '')};
    backdrop-filter: blur(5px);
`;

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    align-items: center;
`;

export const ContainerMenu = styled.div``;

export const Text = styled.a`
    color: #fff;
    margin-left: 8px;
    &:last-child {
        margin-right: 18px;
    }
`;

export const TitleHeader = styled.span`
    margin-top: 8px;
    margin-left: 8px;
    font-size: 28px;
    color: #fff;
`;
