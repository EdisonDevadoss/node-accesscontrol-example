/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // await knex.schema.dropTable('users').dropTable('articles').dropTable('roles');
  return knex.schema
    .createTable('roles', (table) => {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.json('permissions').notNullable();
    })
    .createTable('users', (table) => {
      table.increments('id');
      table.string('email', 255).notNullable();
      table.string('password', 50).notNullable();
      table.integer('role_id').unsigned().notNullable();
      table.foreign('role_id').references('id').inTable('roles');
    })
    .createTable('articles', (table) => {
      table.increments('id');
      table.string('title', 255).notNullable();
      table.string('description').notNullable();
      table.integer('author_id').unsigned().notNullable();
      table.foreign('author_id').references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('articles')
    .dropTable('users')
    .dropTable('roles');
};
