const { createMongoAbility } = require('@casl/ability');

module.exports = createMongoAbility([
  {
    name: 'admin',
    action: 'read',
    subject: 'Post'
  },
  {
    name: 'admin',
    inverted: true,
    action: 'delete',
    subject: 'Post',
    conditions: { published: true }
  }
]);
