const db = require('../data/db-config.js');

module.exports = {
    find,
    findByEventId,
    addEvent,
    removeEvent, 
    updateEvent,
}

function find(cal_id) {
    return (
        db('calendarEvents')
            .where(cal_id)
            .join('events', 'eventsId', 'events.id')
            .select('eventName', 'eventInfo')
    )
}

function findByEventId(cal_id, event_id) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .join('events', 'eventsId', 'events.id')
            .select('eventName', 'eventInfo')
    )
}

function addEvent(cal_id, event) {
    return (
        db('calendarEvents')
            .where(cal_id)
            .insert(event)
    )
}

function removeEvent(cal_id, event_id) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .del()
    )
}

function updateEvent(cal_id, event_id, changes) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .update(changes)
    )
}