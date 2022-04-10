const express = require('express');
const categoryRouter = require('./routes/category.route');
const customerRouter = require('./routes/customer.route');
const orderRouter = require('./routes/order.route');
const orderDetailRouter = require('./routes/order_detail.route');
const paymentRouter = require('./routes/payment.route');
const roleRouter = require('./routes/role.route');
const userRouter = require('./routes/user.route');
const bodyParser = require('body-parser');
const foodItemRouter = require('./routes/food_item.route');
const userController = require('./controllers/user.controller');

const port = 2500;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.status(200).send('Hello world');
});

app.use('/user', userRouter);

app.use('/role', roleRouter);

app.use('/category', categoryRouter);

app.use('/foodItem', foodItemRouter);

app.use('/customer', customerRouter);

app.use('/payment', paymentRouter);

app.use('/order', orderRouter);

app.use('/orderDetail', orderDetailRouter);

app.post('/login', userController.login.bind());

app.use((req, res, next) => {
  const err = new Error();
  err.statusCode = 404;
  err.message = 'Route Not found';
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).json({
    status: 'Error',
    message: err.message,
    reason: err,
  });
});

app.listen(port, () => {
  console.log(`App Running On Port ${port}`);
});
