# Login with NestJs

Um sistema de login com gerenciamento de usuários utilizando o framework NestJS. Uma API REST completa, que inclui um banco de dados próprio (SQLite). Construída utilizando as práticas e recursos recomendados pelo NestJS, uma aplicação robusta e escalável.

O projeto é uma API desenvolvida em Node.js com o framework Nest.js, utilizando as práticas e recursos recomendados pelo mesmo e os os princípios do SOLID, que permite o gerenciamento de usuários através de operações CRUD. Além disso, possui um sistema de autenticação utilizando JSON Web Tokens (JWT) para garantir a segurança das rotas. A API utiliza o Prisma como ORM para facilitar a comunicação com o banco de dados SQLite. A documentação do projeto foi feita com o swagger.

## Endpoints
Os endpoints do projeto podem ser testados com o Swagger [como testar as rotas com o swagger](#Como testar os endpoints com o Swagger)

Endpoints da api:

- Obter a lista completa de usuários cadastrados. (🔓)
- Obter informações de um usuário específico com base no seu ID. (🔓)
- Criar um novo usuário. (🔓)
- Atualizar as informações de um usuário existente. (🔐)
- Excluir um usuário específico. (🔐)
- Login de um usário cadastrado. (🔓)


# Como testar os endpoints com o Swagger
