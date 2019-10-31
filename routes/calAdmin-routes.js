const router = require('express').Router();

// const authenticate = require('../auth/authenticate-middleware');
const CalAdmin = require('./calAdmin-model');


router.get('/:cal_id/admins/', (req, res) => {
    try {
        const { cal_id } = req.params;
        const response = CalAdmin.get(cal_id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error fetching admins'})
    }
})

router.get('/:cal_id/admins/:id', (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = CalAdmin.getById(cal_id, id);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error fetching admin'})
    }
})

router.post('/:cal_id/admins/', (req, res) => {
    try {
        const { cal_id } = req.params;
        const { admin } = req.body;
        const response = CalAdmin.add(cal_id, admin);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error adding admin'})
    }
})

router.delete('/:cal_id/admins/:id', (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const response = CalAdmin.remove(cal_id, id)

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error deleting admin'})
    }
})

router.put('/:cal_id/admins/:id', (req, res) => {
    try {
        const { cal_id, id } = req.params;
        const { admin } = req.body;
        const response = CalAdmin.update(cal_id, id, admin);

        res.status(200).json(response);
    } catch {
        res.status(400).json({ message: 'error updating admin'})
    }
})
module.exports = router;