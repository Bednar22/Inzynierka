const express = require('express');
const router = express.Router();
const Storage = require('../models/storage_model');
const { verifyToken } = require('../middlewares/verifyToken');

// /storage

router.get('/getAll', async (req, res) => {
    Storage.find()
        .then((storage) => {
            res.json(storage);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get('/quantity/:product_id', async (req, res) => {
    await Storage.find({ product_id: req.params.product_id })
        .then((storage) => {
            res.json(storage);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put('/changeStorage', verifyToken, async (req, res) => {
    await Storage.findByIdAndUpdate(req.user._id, { quantity: req.params.quantity })
        .then(() => {
            res.status(200).send('UDALO SIE');
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

router.post('/add', async (req, res) => {
    const storage = new Storage({
        name: req.body.name,
        quantity: req.body.quantity,
        graphNode: req.body.graphNode,
        storage_location: req.body.storage_location,
        product_id: req.body.product_id,
        packingTime: req.body.packingTime,
    });
    try {
        const savedStorage = await storage.save();
        res.json(savedStorage);
    } catch (error) {
        res.status(400).send(err);
    }
});

module.exports = router;
