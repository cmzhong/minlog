const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

// parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// serve app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve('../client/index.html')));

// catch-all error handler
app.use((req, res) => res.sendStatus(404));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;