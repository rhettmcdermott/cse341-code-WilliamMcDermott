const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Rhett McDermott');
});

routes.get('/test', (req, res) => {
  res.send('William McDermott');
});

module.exports = routes;
