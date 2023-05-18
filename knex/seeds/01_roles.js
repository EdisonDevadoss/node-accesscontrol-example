/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('roles').del();
  await knex('roles').insert([
    {
      id: 1,
      role: 'admin',
      resource: 'product',
      action: 'create:any'
    },
    {
      id: 2,
      role: 'admin',
      resource: 'product',
      action: 'read:any'
    },
    {
      id: 3,
      role: 'admin',
      resource: 'product',
      action: 'update:any'
    },
    {
      id: 4,
      role: 'admin',
      resource: 'product',
      action: 'delete:any'
    },

    {
      id: 5,
      role: 'user',
      resource: 'product',
      action: 'create:own'
    },
    {
      id: 6,
      role: 'user',
      resource: 'product',
      action: 'read:any'
    },
    {
      id: 7,
      role: 'user',
      resource: 'product',
      action: 'update:own'
    },
    {
      id: 8,
      role: 'user',
      resource: 'product',
      action: 'delete:own'
    }
  ]);
};
