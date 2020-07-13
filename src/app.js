const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Gabriel', email: 'gabrielgqa@gmail.com' },
  ];

  res.status(200).json(users);
});

module.exports = app;
