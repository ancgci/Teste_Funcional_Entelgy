# Teste Funcional Entelgy

[![Cypress Tests](https://img.shields.io/badge/Cypress-Tests-green)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-blue)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Este repositório contém um roteiro de validação do menu principal do site [www.entelgy.com.br](https://www.entelgy.com.br), com 8 casos de teste que validam o funcionamento das páginas acessíveis através do menu principal.

## Documentação teórica

### Feature: Menu de Navegação Principal

1. **Caso de Teste: Acessar a página inicial**
    - **Dado** que eu sou um usuário que deseja acessar o site da Entelgy
    - **Quando** eu clico na imagem no canto superior a esquerda "Entelgy"
    - **Então** eu sou redirecionado para a página inicial do site

2. **Caso de Teste: Acessar a página "Quem Somos"**
    - **Dado** que eu sou um usuário interessado na história e valores da Entelgy
    - **Quando** eu clico no link "Quem Somos" no menu de navegação principal
    - **Então** eu sou redirecionado para a página "Quem Somos"
    - **E** a página exibe informações sobre a Entelgy

3. **Caso de Teste: Acessar a página "Divisões"**
    - **Dado** que eu sou um usuário interessado nas diferentes divisões da Entelgy
    - **Quando** eu clico no link "Divisões" no menu de navegação principal
    - **Então** eu sou redirecionado para a página "Divisões"
    - **E** a página lista todas as divisões da empresa

4. **Caso de Teste: Acessar a página "Soluções"**
    - **Dado** que eu sou um usuário interessado nos serviços e soluções oferecidos pela Entelgy
    - **Quando** eu clico no link "Soluções" no menu de navegação principal
    - **Então** eu sou redirecionado para a página "Soluções"
    - **E** a página exibe as diferentes soluções e serviços disponíveis

5. **Caso de Teste: Acessar a página "Alianças"**
    - **Dado** que eu sou um usuário interessado nos parceiros e alianças da Entelgy
    - **Quando** eu clico no link "Alianças" no menu de navegação principal
    - **Então** eu sou redirecionado para a página "Alianças"
    - **E** a página exibe informações sobre alianças estratégicas da empresa

6. **Caso de Teste: Acessar a página "Venha Ser um Entelgeer"**
    - **Dado** que eu sou um usuário interessado em oportunidades de carreira na Entelgy
    - **Quando** eu clico no link "Venha Ser um Entelgeer" no menu de navegação principal
    - **Então** eu sou redirecionado para a página "Venha Ser um Entelgeer"
    - **E** a página exibe informações sobre a cultura corporativa, benefícios e vagas disponíveis

7. **Caso de Teste: Acessar o blog da empresa**
    - **Dado** que eu sou um usuário interessado em conteúdos e notícias da Entelgy
    - **Quando** eu clico no link "Blog" no menu de navegação principal
    - **Então** eu sou redirecionado para o blog da empresa
    - **E** a página exibe as últimas postagens e artigos publicados

8. **Caso de Teste: Acessar a página de contato**
    - **Dado** que eu sou um usuário que deseja entrar em contato com a Entelgy
    - **Quando** eu clico no link "Contato" no menu de navegação principal
    - **Então** eu sou redirecionado para a página de contato
    - **E** a página exibe um formulário de contato, informações de localização e dados de contato da empresa

## Como Executar os Testes

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/teste-funcional-entelgy.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd teste-funcional-entelgy
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute os testes:
   ```bash
   npx cypress open
   ```

5. Selecione o arquivo de teste e execute os casos de teste.

## Fotos e Vídeos

Durante a execução dos testes, capturamos screenshots e vídeos para documentar o comportamento das páginas. Aqui estão alguns exemplos:

### Fotos

![Screenshot 1](https://github.com/ancgci/Teste_Funcional_Entelgy/blob/main/images/1.jpg)
![Screenshot 2](https://github.com/ancgci/Teste_Funcional_Entelgy/blob/main/images/2.jpg)
![Screenshot 3](https://github.com/ancgci/Teste_Funcional_Entelgy/blob/main/images/3.jpg)

### Vídeos

Assista a execução dos testes aqui:

[![4](https://github.com/ancgci/Teste_Funcional_Entelgy/blob/main/images/Thumb.png)](https://www.youtube.com/watch?v=PlDKiJfz-Us)

## Observações

Projeto de teste funcional desenvolvido sem vinculo algum com a empresa detentora do site. Atividade de cunho didático e não profissional. Documentação teorica fora desenvolvida com o uso da inteligência artificial e sem acesso algum a documentação oficial da empresa. 


## Licença

Este projeto não está licenciado.