# Login with NestJs

O projeto é uma API rest desenvolvida em Node.js com o framework Nest.js, utilizando as práticas e recursos recomendados pelo mesmo e os princípios do SOLID, que permite o gerenciamento de usuários através de operações CRUD. Além disso, possui um sistema de autenticação utilizando JSON Web Tokens (JWT) para garantir a segurança das rotas. A API utiliza o Prisma como ORM para a comunicação com o banco de dados SQLite usado nesse projeto. A documentação da api foi feita com o swagger. Além disso foi utiliza a padronização de codico do eslint da rocketseat

*******
#### Índice

1. [Endpoints da api](#endpoints-da-api)
2. [Tecnologias utilizadas](#tecnologias-utilizadas)
3. [Dependências](#dependências)
4. [Instalação](#instalação)
5. [Como testar os endpoints com o Swagger](#como-testar-os-endpoints-com-o-swagger)
6. [Licença](#licença)

*******

## Endpoints da api
Os endpoints do projeto podem ser testados com o Swagger [link](#como-testar-os-endpoints-com-o-swagger)

- Obter a lista completa de usuários cadastrados. (🔓)
- Obter informações de um usuário específico com base no seu ID. (🔓)
- Criar um novo usuário. (🔓)
- Atualizar as informações de um usuário existente. (🔐)
- Excluir um usuário específico. (🔐)
- Login de um usário cadastrado. (🔓)
- Documentação da API com o swagger. (🔓)

## Tecnologias utilizadas

- Node.js
- Nest.js
- Prisma
- JWT
- Swagger

## Dependências
  
  - NodeJs
  - Um banco Sql (caso não queira usar o SQLite do projeto)

## Instalação
 
1. Clone este repositório:
```
  git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2. Acesse o diretório do projeto:
```
  cd nome-do-repositorio
```
3. Instale as dependências: 
```
  npm install
```
4. Crie um arquivo `.evn` e configure as variáveis de ambiente: 
```
  JWT_SECRET='segredo do token'
  DOMAIN_PORT=3333
  DATABASE_URL="file:./dev.db"
```
5. Rode o projeto 
```
  npm run start:dev
```

## Como testar os endpoints com o Swagger

**1º** Entrar no endpoint da api:
```
/api
```

### Criando um usuário

**1º** Clicar na rota:
```
POST /user
```
**2º** Clicar em **Try it out** localizado no canto superior direito.
pronto um usuario foi criado

### Logando com um usuário

**1º** Clicar na rota:
```
 /auth/login
```
**2º** Clicar em **Try it out** localizado no canto superior direito.

**3º** Agora clique em **“Execute”**. Como resposta terá o **“token”**.

**4º** Copie o token gerado, que vai estar nos headers da response.

**5º** Logo no inicio temos uma opção chamada **“Authorize”**. 

**6º** Em **“Value”** coloque o token que foi gerado no login.
Pronto suas requisições foram autenticadas

## Licença

Este projeto está licenciado sob a [Licença MIT](https://github.com/runnanC-137/login-with-nest-api/blob/main/LICENSE.txt).

