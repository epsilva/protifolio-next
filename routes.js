const routes = require('next-routes');

module.exports = routes()
  .add('/:node/:child', 'home')
