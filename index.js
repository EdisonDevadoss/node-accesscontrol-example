const fastify = require('fastify');
const knex = require('./knex/knex');
const { ac } = require('./accesscontol');
const { adminPermission } = require('./middleware/admin-permission');
const app = fastify({ logger: true });

app.get('/', function (request, reply) {
  reply.send({ hello: 'world' });
});

app.get('/products', { preValidation: adminPermission }, (request, reply) => {
  reply.send({
    products: [
      { id: 1, name: 'Kindle devices' },
      { id: 2, name: 'JIM KWIK book' }
    ]
  });
});

app.listen({ port: 3000 }, () => {
  console.log('app started');
});
