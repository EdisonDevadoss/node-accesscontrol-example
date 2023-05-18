const accessconrol = require('accesscontrol');

function getGrandList() {
  const grantList = [
    {
      role: 'admin',
      resource: 'product',
      action: 'create:any'
      // attributes: '*, !views'
    },
    {
      role: 'admin',
      resource: 'product',
      action: 'read:any'
      //  attributes: '*'
    },
    {
      role: 'admin',
      resource: 'product',
      action: 'update:any'
      // attributes: '*, !views'
    },
    {
      role: 'admin',
      resource: 'product',
      action: 'delete:any'
      //  attributes: '*'
    },

    {
      role: 'user',
      resource: 'product',
      action: 'create:own'
      // attributes: '*, !rating, !views'
    },
    {
      role: 'user',
      resource: 'product',
      action: 'read:any'
      //  attributes: '*'
    },
    {
      role: 'user',
      resource: 'product',
      action: 'update:own'
      // attributes: '*, !rating, !views'
    },
    {
      role: 'user',
      resource: 'product',
      action: 'delete:own'
      //  attributes: '*'
    }
  ];
  return grantList;
}

const ac = new accessconrol();

module.exports = { ac, getGrandList };
