
const express = require('express');
const router = express.Router();
const Watches = require('../models/Watches');

// get the watches

router.get('/', async (req, res) => {
    try {
        const watches = await Watches.find();
        res.json(watches)
    } catch (err) {
        res.json({message: err})
    }
});

// add a new watch

router.post('/', async (req, res) => {
    const watch = new Watches({
        title : req.body.title,
        description: req.body.description,
        price: req.body.price,
        raiting: req.body.raiting,
        gender: req.body.gender,
        id: req.body.id,
        img: req.body.img
    });

    try {
        const newWatch = await watch.save()
        res.json(newWatch)
    } catch (err) {
        console.log(err);
        res.json({message: err})
    }
})

module.exports = router;