const jwt = require('jsonwebtoken');

const authorization = (req, res, next) => {
  try {
    if (req.user.role_id === 1) {
      next();
    } else {
      //   throw new Error('User Access not Granted or not Authorized');
      res.status(401).json({
        status: 'Unauthorized',
        message: 'Access Denied or Unauthorized. Do contact Administrator',
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
