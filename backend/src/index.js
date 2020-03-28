const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 * 
 * GET: busca/list
 * POST: cria
 * PUT: altera
 * DELETE: deleta
 */

 /**
  * Tipos de parâmetros
  * Query Params: (request.query) parâmetros nomeados enviados na rota apos o simbolo ? normalmente utilizados em filtros e concatenados com &.
  * Route Params: (request.params) parâmetros utilizados para identificar recursos.
  * Request Body: (request.body) corpo da requisção, para criar ou alterar recursos.
  */

/**
 * Bancos de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Formas de escrever query:
  * Driver: select * from users
  * Query Builder: (knex.js) table('users').select('*').where()
  */


// app.get('/', (request, response)=>{
//     return response.json({
//         evento : 'Hello word'
//     });
// });

app.listen(3333);