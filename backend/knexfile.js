// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

/**
 * Entidades:
 * ONG
 * Caso (incident)
 * 
 * Funcionalidades:
 * Login da ONG
 * Logout da ONG
 * Cadastros de ONG
 * Cadastrar novos casos de uma ONG
 * Deletar casos 
 * Listar casos de um ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 * 
 * 
 */