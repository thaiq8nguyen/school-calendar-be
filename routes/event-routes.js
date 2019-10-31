const router = require('express').Router();

// const authenticate = require('../auth/authenticate-middleware');
const Events = require('./event-model');

router.get('/:cal_id/events/', async (req, res) => {
    try {
        const { cal_id } = req.params;
        const response = await Events.get(cal_id);

        res.status(200).json(response);
    } catch (err) {
        console.log('event get error', err)
        res.status(400).json({ message: 'error fetching events'})
    }
})

router.get('/:cal_id/events/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = await Events.getById(cal_id, id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error fetching event'})
    }
})

router.post('/:cal_id/events/', async (req, res) => {
    try {
        const { cal_id } = req.params;
        const { event } = req.body;
        const response = await Events.add(cal_id, event);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error adding event'})
    }
})

router.delete('/:cal_id/events/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = await Events.remove(cal_id, id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error deleting event'})
    }
})

router.put('/:cal_id/events/:id', async (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const { event } = req.body;
        const response = await Events.update(cal_id, id, event);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error updating event'})
    }
})
module.exports = router;