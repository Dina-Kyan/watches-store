const express = require('express');
const router = express.Router();
const CartItems = require('../models/CartItems');

router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItems.find();
        res.json(cartItems)
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {
    const cartItem = new CartItems({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        raiting: req.body.raiting,
        gender: req.body.gender,
        id: req.body.id,
        img: req.body.img,
        total: req.body.total
    });

    try {
        const newCartItem = await cartItem.save()
        res.json(newCartItem)
    } catch (err) {
        console.log(err);
        res.json({ message: err })
    }
})

router.delete('/', async (req, res) => {
    try {
        const deleteItems = await CartItems.deleteMany({});
        res.json(deleteItems)
    } catch (err) {
        res.json({ message: err })
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedCardItem = await CartItems.deleteMany({ id: req.params.postId });
        res.json(removedCardItem)
    } catch (err) {
        res.json({ message: err })
    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const updatedCartItem = await CartItems.updateOne(
            { id: req.params.postId },
            { $set: { total: req.body.total } })
        res.json(updatedCartItem)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;