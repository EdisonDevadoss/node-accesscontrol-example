/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await Promise.all([knex('users').del(), knex('roles').del()]);

  await knex('roles').insert([
    {
      id: 1,
      name: 'admin',
      permissions: JSON.stringify([{ action: 'manage', subject: 'all' }])
    },
    {
      id: 2,
      name: 'member',
      permissions: JSON.stringify([
        { action: 'read', subject: 'Article' },
        {
          action: 'update',
          subject: 'Article',
          conditions: { author_id: 1 }
        }
      ])
    }
  ]);
  await knex('users').insert([
    { id: 1, email: 'admin@casl.io', password: '123456', role_id: 1 },
    { id: 2, email: 'member@casl.io', password: '123456', role_id: 2 }
  ]);
};
