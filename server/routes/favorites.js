const express = require('express');
const router = express.Router();
const Favorites = require('../models/Favorites');

// get the favorites

router.get('/', async (req, res) => {
    try {
        const favorites = await Favorites.find();
        res.json(favorites)
    } catch (err) {
        res.json({message: err})
    }
});

// add a new favorite

router.post('/', async (req, res) => {
    const favorite = new Favorites({
        title : req.body.title,
        description: req.body.description,
        price: req.body.price,
        raiting: req.body.raiting,
        gender: req.body.gender,
        id: req.body.id,
        img: req.body.img
    });

    try {
        const newFavorite = await favorite.save()
        res.json(newFavorite)
    } catch (err) {
        console.log(err);
        res.json({message: err})
    }
})

//delete a favorite

router.delete('/:postId', async (req, res) => {
    try {
        const removedFavorite = await Favorites.deleteMany({id: req.params.postId});
        res.json(removedFavorite)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;