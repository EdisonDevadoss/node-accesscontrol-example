const knex = require('../knex/knex');

const { ac } = require('../accesscontol.js');

const adminPermission = async (req, reply, next) => {
  const role = 'admin'; //request.user.role // Get user role from request.currentUser

  const grandList = await knex('roles').where({
    role: role,
    resource: 'product'
  }); // Get this from DB

  console.log('grand list', grandList);
  ac.setGrants(grandList);
  // console.log(ac.getGrants());
  const permission = ac.can(role).createAny('product');

  console.log('permission', permission);
  console.log('is granted', permission.granted);

  if (!permission.granted) {
    reply.code(403).send({
      errror: ['Your are not permitted to perform this action']
    });
  }
};

module.exports = { adminPermission };
