const router = require('express').Router();
const usersRouter = require('./users');

router.use('/users', usersRouter); // matches all requests to /api/users/

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
