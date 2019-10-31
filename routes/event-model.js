const db = require('../data/db-config.js');

module.exports = {
    get,
    getById,
    add,
    remove, 
    update,
}

function get(calendarId) {
    return (
        db('calendarEvents')
            .where({calendarId})
            .join('events', 'eventsId', 'events.id')
            .select('eventName', 'eventInfo')
    )
}

function getById(calendarId, eventsId) {
    return (
        db('calendarEvents')
            .where({calendarId, eventsId})
            .join('events', 'eventsId', 'events.id')
            .select('eventName', 'eventInfo')
    )
}

function add(calendarId, event) {
    return (
        db('calendarEvents')
            .where({calendarId})
            .insert(event)
    )
}

function remove(cal_id, eventsId) {
    return (
        db('calendarEvents')
            .where({cal_id, eventsId})
            .del()
    )
}

function update(calendarId, eventsId, changes) {
    return (
        db('calendarEvents')
            .where({calendarId, eventsId})
            .update(changes)
    )
}