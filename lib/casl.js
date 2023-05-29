const { createMongoAbility } = require('@casl/ability');

const knex = require('../knex/knex');

async function defineAbilityFor(email, action, resource) {
  const userRules = await knex('users')
    .innerJoin('roles', 'users.role_id', 'roles.id')
    .select('users.id', 'users.email', 'roles.permissions', {
      role: 'roles.name'
    })
    .where({ email })
    .first();

  console.log('mangePermission', userRules);

  return createMongoAbility(userRules.permissions);
}

module.exports = { defineAbilityFor };
