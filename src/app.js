var express = require('express');
var app = express();

app.use(express.json());

app.use(require('./routes/healthz.js'));
app.use(require('./routes/todo'));

// Error Handling
app.use(function (err, req, res, next) {
  console.log('Error -> ' + err);

  res.status(config.HTTP_STATUS.INTERNAL_SERVER_ERROR).render('error');
});

app.listen(3000, () => {
  console.log('listening for 3000 ...');
});
