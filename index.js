const fastify = require('fastify');
const { adminPermission } = require('./middleware/admin-permission');
const caslRules = require('./lib/casl-rules');
const { defineAbilityFor } = require('./lib/casl');
const { ForbiddenError, subject } = require('@casl/ability');
const app = fastify({ logger: true });

const manageEmail = 'member@casl.io';
const superAdmin = 'admin@casl.io';

// class Article{
//   constructor(author_id, sharedWith) {
//     this.author_id = author_id;
//     this.sharedWith = sharedWith;
//   }
// }

app.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

app.get('/products', { preHandler: adminPermission }, (request, reply) => {
  reply.send({
    products: [
      { id: 1, name: 'Kindle devices' },
      { id: 2, name: 'JIM KWIK book' }
    ]
  });
});

app.get('/post', async (req, reply) => {
  // ForbiddenError.from(caslRules).throwUnlessCan('read', 'Posts');

  // console.log(caslRules.can('read', 'Post'));

  const rules = await defineAbilityFor(manageEmail);
  console.log('defineAbilityFor', rules);

  console.log(
    'read post',
    rules.can('update', subject('Article', { author_id: 1 }))
  );

  if (rules.can('update', subject('Article', { author_id: 1 }))) {
    reply.send({
      products: [
        { id: 1, name: 'Kindle devices' },
        { id: 2, name: 'JIM KWIK book' }
      ]
    });
  } else {
    reply.code(403).send({
      errror: ['Your are not permitted to perform this action']
    });
  }
});

app.listen({ port: 3000 }, () => {
  console.log('app started');
});
