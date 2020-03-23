import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    img {
      width: 429px;
      height: 267px;
      margin-top: 25px;

      @media screen and (max-width: 510px) {
        width: 324px !important;
      }
    }

    h1 {
      font: Bold 85px/102px Roboto;
      color: #0052cc;
    }

    h2 {
      font-size: 2.3em;
      letter-spacing: 0;
      color: #0052cc;
      margin-top: 10px;
      opacity: 1;
      text-align: center;
    }
    
  }
`;

export const DivText = styled.div``;
