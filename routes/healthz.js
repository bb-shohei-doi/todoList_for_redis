var router = require('express').Router();

router.get('/healthz', (req, res, next) => {
  return res.status(200).send({ "status": "OK" });
});

module.exports = router;
