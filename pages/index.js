import React from 'react';

import Header from '../src/components/Header';
import { ContainerMain, Container, ContainerLeft, ContainerRight, Title, Description } from '../src/styles/Index/styles';
import { Button } from '../src/styles/styles';
import Link from 'next/link';

function Index() {
  return (
    <>
      <ContainerMain>
        <Header isIndex />
        <Container>
          <ContainerLeft />
          <ContainerRight>
            <Title>Profile Manager</Title>
            <br />
            <Description>
              Profile Manager, foi um sitema criado para profíssionais que desejam compartilhar suas experiências, projetos de uma forma que simples e personalizada.
            </Description>
            <br />
            <Description className="ask">
              Se interessou?
            </Description>
            <Link href="/profile/esdras-pinheiro">
              <a>
                <Button>
                  Veja um de nossos exemplos
                </Button>
                <p>Versão beta, em desenvolvimento</p>
              </a>
            </Link>
          </ContainerRight>
        </Container>
      </ContainerMain>
    </>
  );
}

export default Index;
