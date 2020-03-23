import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 6px;
  padding: 8px;

  color:#FFF;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  background: #6963fb;
  height: 42px;

  &:hover {
    background: ${darken(0.2, '#6963fb')};
  }

`;

export const Input = styled.input`
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 6px;
    padding: 8px;
    font-size: 16px;
    height: 42px;

    margin-right: 8px;
    margin-bottom: 22px;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
`;

export const LinkCuston = styled.span`
  cursor: pointer;
  color: #6963fb;
  filter: invert(0);
  &:hover {
    transform: scale(1.2);
  }   
`;
