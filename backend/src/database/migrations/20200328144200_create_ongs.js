exports.up = function(knex) {
   return knex.schema.createTable('ongs', (table)=>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**
 * Criar migrations: npx knex migrate:make create_ongs
 * Rodar migrations: npx knex migrate:latest
 * Ver comandos: npx knex
 */
