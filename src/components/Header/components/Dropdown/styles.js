import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: inline-block;

    .content {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 60px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 2px 2px;
        z-index: 1;
        right: calc(100% - 50px);
        margin-top: 8px;
        border-radius: 4px;
        transition: 0.3s;

        ::before {
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            border-top: 8px solid transparent;
            border-bottom: 8px solid #f9f9f9;
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            left: calc(100% - 39px);
            top: -14px;
        }
    }

    &:hover .content {
        display: block;
        visibility: visible;
        opacity: 1;
    }
`;

