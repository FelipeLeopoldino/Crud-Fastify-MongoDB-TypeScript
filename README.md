# CRUD de Clientes

Este é um projeto de CRUD (Create, Read, Delete) de clientes, desenvolvido utilizando Node.js, TypeScript, Fastify, MongoDB, React e Tailwind CSS. O objetivo do projeto é permitir o cadastro, visualização, atualização e exclusão de usuários em um sistema web.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para backend.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web rápido e eficiente para Node.js.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework de CSS para estilização rápida e responsiva.

## Funcionalidades

- **Cadastro de Cliente**: Permite criar um novo usuário com nome e email.
- **Listagem de Cliente**: Exibe uma lista de todos os usuários cadastrados.
- **Exclusão de Cliente**: Permite excluir um usuário do sistema.

## Instalação

1. Clone o repositório:

   [git clone https://github.com/FelipeLeopoldino/Crud-Fastify-MongoDB-TypeScript.git]

2. Instale as dependências do backend:   
  cd backend
  npm install

3. Instale as dependências do frontend:
  cd ../frontend
  npm install

4. Crie um arquivo .env na raiz do projeto backend e configure as variáveis de ambiente conforme necessário:
   MONGODB_URI=sua_url_do_mongodb

5. Inicie o servidor backend:
  cd backend
  npm run dev

6. Inicie o servidor frontend:
  cd ../frontend
  npm start

7. Acesse o sistema em http://localhost:5173.

Endpoints da API
- GET /customers - Lista todos os clientes
- POST /customer - Cria um novo clientes
- DELETE /customer/:id - Remove um clientes


Contribuição
- Faça um fork do projeto
- Crie uma nova branch (git checkout -b feature/nova-funcionalidade)
- Commit suas alterações (git commit -am 'Adiciona nova funcionalidade')
- Faça push para a branch (git push origin feature/nova-funcionalidade)
- Abra um Pull Request


