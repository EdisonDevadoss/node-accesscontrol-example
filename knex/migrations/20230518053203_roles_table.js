/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('roles', (table) => {
    table.increments('id');
    table.string('role', 255).notNullable();
    table.string('resource', 255).notNullable();
    table.string('action', 255).notNullable();
    table.json('attributes').nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
