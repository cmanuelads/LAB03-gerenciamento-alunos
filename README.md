\# Gerenciamento de Alunos - DevTech Academy



Este projeto é um sistema simples de Gerenciamento de Alunos (CRUD) desenvolvido para a "DevTech Academy".Ele permite cadastrar, listar, editar e excluir alunos, além de gerar relatórios baseados nos dados.



\## Funcionalidades Principais



O sistema implementa as seguintes funcionalidades, cobrindo os exercícios propostos:



CRUD Completo: Cadastro, Listagem, Edição e Exclusão de alunos, com dados armazenados em memória (array de objetos).

Orientação a Objetos: Utiliza a classe `Aluno` com atributos e métodos, como `isAprovado()`.

Manipulação de Eventos: Uso de `addEventListener`, funções anônimas e \*arrow functions\*.

Relatórios: Geração de relatórios dinâmicos utilizando métodos de array como `filter`, `map`, `reduce` e `sort`.



\## Estrutura do Projeto



Os principais arquivos são:



&nbsp;`index.html`: Estrutura da interface.

&nbsp;`app.js`: Lógica principal (CRUD, Classe Aluno, Relatórios).

&nbsp;`style.css`: Estilos da aplicação.

&nbsp;`Dockerfile`: Configuração para desenvolvimento em contêiner Docker.



\## Como Executar o Projeto (Via Docker)



O desenvolvimento foi configurado para usar um container Docker.



Pré-requisitos: Docker Desktop instalado e rodando.



1\.  Construir a Imagem Docker:

&nbsp;   Navegue até a pasta raiz do projeto (`gerenciamento-alunos`) no terminal e execute:

&nbsp;   ```bash

&nbsp;   docker build -t gerenciamento-alunos .

&nbsp;   ```



2\.  Executar o Container:

&nbsp;   Inicie o container, mapeando a porta `8080` do seu computador para a porta `80` do container:

&nbsp;   ```bash

&nbsp;   docker run -d -p 8080:80 --name devtech-app gerenciamento-alunos

&nbsp;   ```



3\.  Acessar a Aplicação:

&nbsp;   Abra seu navegador e acesse: `http://localhost:8080`



---

Este projeto foi criado como um exercício de desenvolvimento front-end.

