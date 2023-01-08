const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Bill McDermott');
});

routes.get('/test', (req, res) => {
  res.send('Rhett McDermott');
});

module.exports = routes;
