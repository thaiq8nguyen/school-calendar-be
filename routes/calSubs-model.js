const db = require('../data/db-config.js');

module.exports = {
    find,
    findByUserId,
    addUser,
    removeUser, 
    updateUser,
}

function find(cal_id) {
    return (
        db('userCalendars')
            .where(cal_id)
            .join('users', 'userId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function findByUserId(cal_id, user_id) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .join('users', 'userId', 'users.id')
            .select('name', 'username', 'email', 'phone')
    )
}

function addUser(cal_id, user) {
    return (
        db('userCalendars')
            .where(cal_id)
            .insert(user)
    )
}

function removeUser(cal_id, user_id) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .del()
    )
}

function updateUser(cal_id, user_id, changes) {
    return (
        db('userCalendars')
            .where({cal_id, user_id})
            .update(changes)
    )
}