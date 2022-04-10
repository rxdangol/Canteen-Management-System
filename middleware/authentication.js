const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        res.send('You are not Authenticated');
      }
      const decoded = jwt.verify(token, 'secretKey');
      req.user = decoded;
      next();
    } else {
      throw new Error('Token Not Found or Unauthorized');
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
