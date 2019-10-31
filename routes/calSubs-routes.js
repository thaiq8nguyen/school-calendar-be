const router = require('express').Router();

// const authenticate = require('../auth/authenticate-middleware');
const CalSubs = require('./calSubs-model');


router.get('/:cal_id/subscribers/', async (req, res) => {
    try {
        const { cal_id } = req.params;
        const response = CalSubs.get(cal_id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error fetching subscribers'})
    }
})

router.get('/:cal_id/subscribers/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = CalSubs.getById(cal_id, id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error fetching subscriber'})
    }
})

router.post('/:cal_id/subscribers/', async (req, res) => {
    try {
        const { cal_id } = req.params;
        const { subscriber } = req.body;
        const response = CalSubs.add(cal_id, subscriber);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error adding subscriber'})
    }
})

router.delete('/:cal_id/subscribers/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = CalSubs.remove(cal_id, id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error deleting subscriber'})
    }
})

router.put('/:cal_id/subscribers/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const { subscriber } = req.body;
        const response = CalSubs.update(cal_id, id, subscriber);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error updating subscriber'})
    }
})
module.exports = router;