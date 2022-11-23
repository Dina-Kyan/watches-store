
const express = require('express');
const router = express.Router();
const Orders = require('../models/Orders');

router.get('/', async (req, res) => {
    try {
        const orders = await Orders.find();
        res.json(orders)
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {
    const order = new Orders({
        title: req.body.title,
        totalPrice: req.body.totalPrice,
        id: req.body.id,
        date: req.body.date,
        orderdItems: req.body.orderdItems
    });

    try {
        const newOrder = await order.save()
        res.json(newOrder)
    } catch (err) {
        console.log(err);
        res.json({ message: err })
    }
})

router.delete('/:postId', async (req, res) => {
    try {
        const removedOrder = await Orders.deleteMany({id: req.params.postId});
        res.json(removedOrder)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;