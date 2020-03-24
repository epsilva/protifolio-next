const routes = require('next-routes');

module.exports = routes()
  .add('/', 'index')
  .add('/login', 'login')
  .add('/:node/:child', 'showprofile')
  .add('/home', 'home')
  ;
