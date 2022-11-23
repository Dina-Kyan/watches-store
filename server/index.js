
const express = require('express');
const app = express();

const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const watchesRoute = require('./routes/watches');
const favoritesRoute = require('./routes/favorites');
const cartItemsRoute = require('./routes/cartItems');
const ordersRoute = require('./routes/orders');

app.use('/cartItems', cartItemsRoute)
app.use('/watches', watchesRoute);
app.use('/favorites', favoritesRoute);
app.use('/orders', ordersRoute);


app.get('/', (req, res) => {
    res.send('Hello world');
})

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('db connected');
})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})