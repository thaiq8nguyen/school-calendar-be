const router = require('express').Router();

// const authenticate = require('../auth/authenticate-middleware');
const Events = require('./event-model');

//getting a list of events
router.get('/:cal_id/events/', (req, res) => {
    Events.find()
        .then(event => res.json({ event }))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: `unable to get events`})
        })
})
//adding an event to array
router.post('/:cal_id/events/', (req, res) => {
    let events = req.body
    Events.addEvent( events )
    .then(saved => res.json({ saved }))
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: `err adding events`, err: err})
    })
})
//delete an event
router.delete('/:cal_id/events/:id', (req, res) => {
    Events.removeEvent(req.params.id)
    .then(removed => {
        if(removed > 0) {
            res.status(200).end()
        }else{
            res.status(404).json('feature not found')
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: `internal server error`, err:err})
    })
})
//update event
router.put('/:cal_id/events/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    Events.updateEvent(id, changes)
    .then( update => {
        if (update >0) {
            Events.findById(id)
            .then(event => res.status(200).json(event))
        }else{
            res.status(404).json('feature not found')
        }
    })
    .catch(err => {
        console.log('something is went wrong', err)
        res.status(500).json(err)
    })
})
module.exports = router;