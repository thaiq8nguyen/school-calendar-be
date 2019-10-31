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
        db('userCalendars')
            .where(cal_id)
            .join('users', 'userId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function getById(cal_id, user_id) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .join('users', 'userId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function add(cal_id, user) {
    return (
        db('userCalendars')
            .where(cal_id)
            .insert(user)
    )
}

function remove(cal_id, user_id) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .del()
    )
}

function update(cal_id, user_id, changes) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .update(changes)
    )
}