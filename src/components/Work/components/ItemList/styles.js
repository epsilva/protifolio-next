import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    /* background-color: #17004d; */
    /* background-color: #262626; */
    background: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 1rem #000;
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    padding: 18px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 710px) {
        height: 280px;
        max-height: 280px;
        width: 200px;
        min-width: 200px;
    }

    @media screen and (max-width: 510px) {
        margin-left: 160px;
    }

    &:first-of-type {
        box-shadow: 1rem 0 1rem #000;
    }

    &:not(:first-child) {
        margin-left: -50px;
    }

    &:hover {
        transform: translateY(-20px);
        transition: 0.4s ease-out;
    }

    &:hover ~ .card {
        position: relative;
        left: 50px;
        transition: 0.4s ease-out;
        /* @media screen and (max-width: 910px) {
            left: 0px;
        } */
    }
`;

export const TitleCompany = styled.span`
    margin-top: 18px;
    font-size: 18px;
    white-space: nowrap;
    color: white;
    font-weight: 300;
`;

export const Function = styled.span`
    margin-top: 8px;
    font-size: 14px;
    color: #d3d3d3;
`;

export const Period = styled.span`
    font-size: 12px;
    color: #d3d3d3;
`;

export const ContainerHeader = styled.div`
    display: flex;
`;
