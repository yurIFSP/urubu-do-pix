// External Libraries
import React from "react";

// Components

// Styles
import {
  Container,
  ContainerBody,
  ContainerButtons,
  Content,
  Title,
} from "./styles";
import { TitledInput } from "../../components/TitledInput";
import { Button } from "../../components/Button";

export const Register: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Cadastre-se para utilizar o Urubo do Pix</Title>
        <ContainerBody>
          <TitledInput label={"Nome"} placeholder="Insira seu nome" />
          <TitledInput label={"Email"} placeholder="Insira seu email" />
          <TitledInput label={"Senha"} placeholder="Insira sua senha" />
          <TitledInput
            label={"Chave do Pix"}
            placeholder="Insira sua chave do pix"
          />
          <ContainerButtons>
            <Button label={"Cancelar"} />
            <Button label={"Cadastrar-se"} />
          </ContainerButtons>
        </ContainerBody>
      </Content>
    </Container>
  );
};
