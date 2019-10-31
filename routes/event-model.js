const db = require('../data/db-config.js');

module.exports = {
    get,
    getById,
    add,
    remove, 
    update,
}

function get(cal_id) {
    return (
        db('calendarEvents')
            .where(cal_id)
            .select('calendarId', 'eventsId')
            // .join('events', 'eventsId', 'events.id')
            // .select('eventName', 'eventInfo')
    )
}

function getById(cal_id, event_id) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .join('events', 'eventsId', 'events.id')
            .select('eventName', 'eventInfo')
    )
}

function add(cal_id, event) {
    return (
        db('calendarEvents')
            .where(cal_id)
            .insert(event)
    )
}

function remove(cal_id, event_id) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .del()
    )
}

function update(cal_id, event_id, changes) {
    return (
        db('calendarEvents')
            .where({cal_id, event_id})
            .update(changes)
    )
}